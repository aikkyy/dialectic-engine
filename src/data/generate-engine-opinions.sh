#!/usr/bin/env bash

set -euo pipefail

INPUT_FILE="input.txt"
OUTPUT_FILE="engineOpinions.ts"

echo "Generating $OUTPUT_FILE..."

awk -F '\t' '

function escape(str) {
  gsub(/\\/, "\\\\", str)
  gsub(/"/, "\\\"", str)
  gsub(/\r/, "", str)
  return str
}

BEGIN {
  print "export type EngineOpinionType = {"
  print "  keyword: string"
  print "  category: string"
  print "  data: {"
  print "    opinion: string"
  print "    antiThesis: string"
  print "  }[]"
  print "}"
  print ""
  print "export const engineOpinions: EngineOpinionType[] = ["
}

NR == 1 {
  next
}

NF >= 6 {

  category = escape($1)
  keyword  = escape($4)
  opinion  = escape($5)
  anti     = escape($6)

  if (keyword == "" || opinion == "" || anti == "") {
    next
  }

  # initialize keyword group if needed
  if (!(keyword in seen)) {
    seen[keyword] = 1
    keywordOrder[++count] = keyword
    keywordCategory[keyword] = category
    keywordData[keyword] = ""
  }

  # keep first category only (consistent per keyword)
  if (keywordCategory[keyword] == "") {
    keywordCategory[keyword] = category
  }

  entry = ""
  entry = entry "      {\n"
  entry = entry "        opinion: \"" opinion "\",\n"
  entry = entry "        antiThesis: \"" anti "\"\n"
  entry = entry "      }"

  if (keywordData[keyword] != "") {
    keywordData[keyword] = keywordData[keyword] ",\n" entry
  } else {
    keywordData[keyword] = entry
  }
}

END {

  for (i = 1; i <= count; i++) {

    keyword = keywordOrder[i]
    category = keywordCategory[keyword]

    print "  {"
    print "    category: \"" category "\","
    print "    keyword: \"" keyword "\","
    print "    data: ["
    print keywordData[keyword]
    print "    ]"
    print "  }" (i < count ? "," : "")
  }

  print "]"
}
' "$INPUT_FILE" > "$OUTPUT_FILE"

echo "Done."
echo "Created $OUTPUT_FILE"