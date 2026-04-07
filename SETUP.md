# Project setup for React Engagement Invitation

## Quick Setup Guide

### Step 1: Install Node Modules
```bash
npm install
```

This will install all dependencies including:
- React 18 + TypeScript
- Framer Motion (animations)
- Tailwind CSS (styling)
- Vite (build tool)

### Step 2: Start Development Server
```bash
npm run dev
```

Your browser will automatically open the site at `http://localhost:5173`

### Step 3: Make Changes
- Edit React components in `src/components/`
- Modify styles in `tailwind.config.js` or component files
- Changes will hot-reload automatically

### Step 4: Build for Production
```bash
npm run build
```

This creates optimized files in the `dist/` folder

---

## Customization Quick Reference

### 📅 Change Event Date
File: `src/components/CountdownSection.tsx`
```typescript
const eventDate = new Date('2026-07-18T17:00:00+05:30').getTime()
```

### 👥 Change Names
Files to update:
- `src/components/CurtainOverlay.tsx`
- `src/components/HeroSection.tsx`
- `src/components/CoupleSection.tsx`

### 📍 Change Venue
File: `src/components/EventDetailsSection.tsx`

### 🎨 Change Colors
File: `tailwind.config.js` - colors section

### 🎵 Add Music
Place `music.mp3` in `assets/` folder

### 📸 Add Photos
Place images in `assets/` and update component image paths

---

## Premium Features Explained

### 1. Curtain Animation ✨
- Smooth opening curtain effect on page load
- Dramatic reveal of invitation
- Premium theatrical experience

### 2. Scroll Animations 🎬
- Sections animated as you scroll
- Intersection Observer API for performance
- Smooth, elegant transitions

### 3. Countdown Timer ⏱️
- Real-time countdown to event
- Automatically calculates days/hours/minutes/seconds
- Premium timer display

### 4. Particle Effects ✨
- Animated sparkle canvas background
- Gold and blush colored particles
- Adds premium visual polish

### 5. Interactive RSVP Form 📝
- Fully functional form with validation
- Success confirmation message
- Contact information collection

### 6. Responsive Design 📱
- Mobile-first approach
- Perfect on all screen sizes
- Touch-friendly interactions

---

## File Structure
```
src/
├── App.tsx                          # Main app orchestrator
├── main.tsx                         # React entry point
├── index.css                        # Global styles
└── components/
    ├── CurtainOverlay.tsx           # Opening animation
    ├── HeroSection.tsx              # Title section
    ├── CoupleSection.tsx            # Bride & groom
    ├── SaveTheDateSection.tsx       # Date card
    ├── EventDetailsSection.tsx      # Venue info
    ├── CountdownSection.tsx         # Timer
    ├── GallerySection.tsx           # Photo gallery
    ├── RSVPSection.tsx              # Form
    ├── ClosingSection.tsx           # Closing message
    ├── MusicToggle.tsx              # Music button
    └── SparkleCanvas.tsx            # Animations
```

---

## Deploy Your Invitation

### Option 1: Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify
1. Build: `npm run build`
2. Drag `dist/` folder to Netlify

### Option 3: GitHub Pages
1. Update vite.config.ts
2. Build and push to GitHub

---

## Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Browser not opening automatically?**
Visit `http://localhost:5173` manually

---

## Premium Design Features
✨ Luxury color palette (gold, wine, deep-green)
✨ Premium typography (Playfair Display, Great Vibes)
✨ Smooth animations and transitions
✨ Glassmorphism effects
✨ Responsive and accessible
✨ Performance optimized
✨ SEO ready

---

**Enjoy creating your premium invitation! 💍**
