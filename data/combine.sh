#!/usr/bin/env bash
set -euo pipefail

# ── helpers ───────────────────────────────────────────────────────────────────

usage() {
  echo "Usage:"
  echo "  $0 <subjects.md|js> <opinions.md|js> [output.md]   # generate all combinations"
  echo "  $0 --js <file.md|js> [output.js]                   # convert one file to a JS array"
  exit 1
}

# Strip Windows-style \r and remove blank/whitespace-only lines, print to stdout.
clean_lines() {
  sed 's/\r//' "$1" | grep -v '^[[:space:]]*$'
}

# Extract entries from a file — works for both .md (one entry per line)
# and .js (quoted strings inside an array).  Prints one entry per line.
extract_entries() {
  local file="$1"
  [[ -f "$file" ]] || { echo "Error: '$file' not found" >&2; exit 1; }

  case "${file##*.}" in
    js)
      # Pull every "..." string value from the JS array, unescape \" and \\
      grep -oP '"((?:[^"\\]|\\.)*)"' "$file" \
        | sed 's/^"//; s/"$//' \
        | sed 's/\\"/"/g; s/\\\\/\\/g' \
        | grep -v '^[[:space:]]*$'
      ;;
    *)
      # Plain text / markdown: one entry per line
      clean_lines "$file"
      ;;
  esac
}

# ── generate_combinations ─────────────────────────────────────────────────────
# Writes "<subject> should <opinion>" for every subject/opinion pair.
# Accepts .md or .js for both input files.

generate_combinations() {
  local subjects_file="$1"
  local opinions_file="$2"
  local output_file="${3:-combinations.md}"

  [[ -f "$subjects_file" ]] || { echo "Error: '$subjects_file' not found"; exit 1; }
  [[ -f "$opinions_file" ]] || { echo "Error: '$opinions_file' not found"; exit 1; }

  local tmp_subjects tmp_opinions
  tmp_subjects=$(mktemp)
  tmp_opinions=$(mktemp)

  extract_entries "$subjects_file" > "$tmp_subjects"
  extract_entries "$opinions_file" > "$tmp_opinions"

  # Single awk pass: load opinions once, stream subjects
  awk -v op_file="$tmp_opinions" '
    BEGIN {
      while ((getline line < op_file) > 0)
        opinions[++n] = line
    }
    {
      subj = $0
      for (i = 1; i <= n; i++)
        print subj " should " opinions[i]
    }
  ' "$tmp_subjects" > "$output_file"

  rm -f "$tmp_subjects" "$tmp_opinions"

  local count
  count=$(wc -l < "$output_file")
  echo "✓ $count combinations written to '$output_file'"
}

# ── file_to_js ────────────────────────────────────────────────────────────────
# Converts a single .md or .js file into a JS module exporting a string array.
# The variable name is derived from the output filename.

file_to_js() {
  local input_file="$1"

  local js_file
  if [[ -n "${2:-}" ]]; then
    js_file="$2"
  else
    # Strip known extensions and add .js
    js_file="${input_file%.*}.js"
  fi

  [[ -f "$input_file" ]] || { echo "Error: '$input_file' not found"; exit 1; }

  local var_name
  var_name=$(basename "${js_file%.js}" | tr -cs '[:alnum:]' '_' | sed 's/_$//')

  {
    printf 'const %s = [\n' "$var_name"
    extract_entries "$input_file" | \
      sed 's/\\/\\\\/g' | \
      sed 's/"/\\"/g'   | \
      sed 's/^\(.*\)$/  "\1",/'
    printf '];\n\nexport default %s;\n' "$var_name"
  } > "$js_file"

  local count
  count=$(extract_entries "$input_file" | wc -l)
  echo "✓ $count entries → '$js_file'"
}

# ── entry point ───────────────────────────────────────────────────────────────

if [[ $# -lt 1 ]]; then
  usage
fi

if [[ "$1" == "--js" ]]; then
  shift
  [[ $# -lt 1 ]] && usage
  file_to_js "$@"
else
  [[ $# -lt 2 ]] && usage
  generate_combinations "$@"
fi