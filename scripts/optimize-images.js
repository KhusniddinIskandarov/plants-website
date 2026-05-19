import sharp from 'sharp'
import { readdirSync } from 'fs'
import { join, extname, basename } from 'path'

const inputDir = './src/assets/images'
const outputDir = './src/assets/images'

const files = readdirSync(inputDir)

for (const file of files) {
  const ext = extname(file).toLowerCase()
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue

  const inputPath = join(inputDir, file)
  const outputName = basename(file, ext) + '.webp'
  const outputPath = join(outputDir, outputName)

  await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath)

  console.log(`✓ ${file} → ${outputName}`)
}

console.log('Done!')
