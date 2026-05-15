// optimize-md.js
import fs from 'fs'

const inputFile = 'opinions.md'
const outputFile = 'opinions-optimized.md'

try {
  // Read file
  const content = fs.readFileSync(inputFile, 'utf8')

  // Split into lines
  const lines = content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)

  const seen = new Set()
  const duplicates = new Set()
  const uniqueLines = []

  for (const line of lines) {
    if (seen.has(line)) {
      duplicates.add(line)
    } else {
      seen.add(line)
      uniqueLines.push(line)
    }
  }

  // Save optimized file
  fs.writeFileSync(outputFile, uniqueLines.join('\n'), 'utf8')

  // Logging
  console.log('==================================')
  console.log(`Total lines: ${lines.length}`)
  console.log(`Unique lines: ${uniqueLines.length}`)
  console.log(`Duplicate count: ${duplicates.size}`)
  console.log('==================================')

  if (duplicates.size > 0) {
    console.log('Duplicate strings:\n')

    for (const dup of duplicates) {
      console.log(`- ${dup}`)
    }
  } else {
    console.log('No duplicates found.')
  }

  console.log('==================================')
  console.log(`Optimized file saved as: ${outputFile}`)
} catch (err) {
  console.error('Error:', err.message)
}
