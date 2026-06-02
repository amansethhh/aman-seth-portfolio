/**
 * Image Optimization Script
 * Converts PNGs to WebP, generates responsive variants.
 * Originals preserved in public/images/original/
 * Optimized outputs written to public/images/optimized/
 */

import sharp from 'sharp'
import { resolve, basename, extname } from 'path'
import { mkdirSync, existsSync } from 'fs'

const PUBLIC = resolve('public')
const OPTIMIZED = resolve('public/images/optimized')

// Ensure output dir exists
if (!existsSync(OPTIMIZED)) mkdirSync(OPTIMIZED, { recursive: true })

// ── Hero Avatar — responsive variants ────────────────────
const heroSizes = [480, 768, 1200]

async function optimizeHero() {
  const src = resolve(PUBLIC, 'avatar-main.webp')
  console.log('\n🖼️  Hero Avatar')
  console.log(`   Source: avatar-main.webp`)

  for (const w of heroSizes) {
    const out = resolve(OPTIMIZED, `avatar-${w}.webp`)
    const info = await sharp(src)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 92 })
      .toFile(out)
    console.log(`   → avatar-${w}.webp  ${(info.size / 1024).toFixed(1)} KB`)
  }
}

// ── Project Screenshots — desktop (1200) + mobile (800) ──
const projectImages = [
  'Orato AI Home Dashboard.png',
  'Interview Practice screen.png',
  'AI Feedback screen.png',
  'Live Prediction Page.png',
  'Multilingual Analysis Page.png',
  'Home Page.png',
  'Hero Section.png',
  'Tech Stack Section.png',
  'About Section.png',
]

const projectSizes = [
  { suffix: '800', width: 800 },
  { suffix: '1200', width: 1200 },
]

async function optimizeProjects() {
  console.log('\n📸  Project Screenshots')

  for (const img of projectImages) {
    const src = resolve(PUBLIC, img)
    const name = basename(img, extname(img))
    console.log(`\n   Source: ${img}`)

    for (const { suffix, width } of projectSizes) {
      const outName = `${name}-${suffix}.webp`
      const out = resolve(OPTIMIZED, outName)
      const info = await sharp(src)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(out)
      console.log(`   → ${outName}  ${(info.size / 1024).toFixed(1)} KB`)
    }
  }
}

// ── Oversized decorative icons ────────────────────────────
const oversizedIcons = [
  { file: 'Glass Connection Network.webp', maxWidth: 400 },
  { file: 'Glass Paper Plane.webp', maxWidth: 400 },
]

async function optimizeIcons() {
  console.log('\n✨  Oversized Decorative Icons')

  for (const { file, maxWidth } of oversizedIcons) {
    const src = resolve(PUBLIC, file)
    const outName = basename(file, '.webp') + '-opt.webp'
    const out = resolve(OPTIMIZED, outName)
    const info = await sharp(src)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(out)
    console.log(`   ${file} → ${outName}  ${(info.size / 1024).toFixed(1)} KB`)
  }
}

// ── Run all ───────────────────────────────────────────────
async function main() {
  console.log('═══════════════════════════════════════════')
  console.log('  Image Optimization — Production Assets')
  console.log('═══════════════════════════════════════════')

  await optimizeHero()
  await optimizeProjects()
  await optimizeIcons()

  console.log('\n✅ All optimized assets written to public/images/optimized/')
  console.log('   Originals preserved in public/images/original/')
}

main().catch(console.error)
