# 🚀 QUICK START - Commands & Customization

## ⚡ Quick Commands

```bash
# Install dependencies (run this first!)
npm install

# Start development server (auto-opens browser)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Alternative port if 5173 is taken
npm run dev -- --port 3000
```

---

## 🎨 What to Customize

### 1️⃣ Event Date (FIRST!)
**File:** `src/components/CountdownSection.tsx` (around line 22)
```typescript
const eventDate = new Date('2026-07-18T17:00:00+05:30').getTime()
//                              ^^^^^^^^^^^^^^^^^^^^
//                              Change this to your date
```

### 2️⃣ Couple Names
**Search for:** "Bharath" and "Thraya" (appears in multiple files)

**Files to Update:**
- `src/components/CurtainOverlay.tsx`
- `src/components/HeroSection.tsx`
- `src/components/CoupleSection.tsx`
- `src/components/ClosingSection.tsx`

### 3️⃣ Venue Address
**File:** `src/components/EventDetailsSection.tsx` (around line 41)
```typescript
const eventIcons = [
  // ... date & time ...
  { icon: '📍', title: 'Venue', details: ['Your Venue Name', 'Your Address Line 1', 'Your Address Line 2'] },
]
```

### 4️⃣ Contact Phone Numbers
**File:** `src/components/RSVPSection.tsx` (around line 128-136)
```typescript
<a href="tel:+919876543210" className="...">+91 98765 43210</a>
//                ^^^^^^^^^^
//                Change these
```

### 5️⃣ Colors (Optional)
**File:** `tailwind.config.js` (colors section)
```javascript
colors: {
  gold: '#C9A84C',           // Change main accent
  wine: '#722F37',           // Change secondary
  'deep-green': '#1B4332',  // Change background accent
}
```

### 6️⃣ Add Photos
1. Place images in `assets/` folder
2. Update component image paths

**Couple photos:**
```jsx
// In src/components/CoupleSection.tsx
<img src="assets/groom.jpg" alt="Bharath" />
<img src="assets/bride.jpg" alt="Thraya" />
```

**Gallery photos:**
```jsx
// In src/components/GallerySection.tsx
<img src="assets/gallery-1.jpg" alt="Photo 1" />
```

### 7️⃣ Add Background Music
1. Place `music.mp3` in `assets/` folder
2. It auto-loads with the music toggle button

---

## 📁 Important Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main app component |
| `src/components/*.tsx` | Individual page sections |
| `tailwind.config.js` | Colors & styling |
| `index.html` | HTML template |
| `package.json` | Dependencies |

---

## 🌐 Deployment

### Option 1: Vercel (Easiest)
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify
```bash
npm run build
# Drag 'dist' folder to Netlify
```

### Option 3: GitHub Pages
```bash
npm run build
git add .
git commit -m "Deploy"
git push
```

---

## 🆘 Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**npm install fails?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Make sure `npm run dev` is still running

---

## 📚 Full Documentation

- **COMPLETION.md** - Project completion summary
- **PROJECT_OVERVIEW.md** - Complete reference
- **SETUP.md** - Detailed setup guide
- **README_REACT.md** - Full feature docs
- **MIGRATION.md** - What changed

---

## ✅ Pre-Deploy Checklist

- [ ] Changed event date
- [ ] Updated couple names
- [ ] Added couple photos
- [ ] Updated venue address
- [ ] Updated contact numbers
- [ ] Added background music
- [ ] Tested on mobile
- [ ] Ran `npm run build`
- [ ] Tested production build with `npm run preview`

---

## 💡 Pro Tips

1. **Hot Reload** - Changes auto-update as you type
2. **Browser DevTools** - Press F12 to debug
3. **Search & Replace** - Use Ctrl+H to find/replace names
4. **Component Comments** - Read inline documentation
5. **Mobile Testing** - Resize browser or use device

---

**Ready? Start with:** `npm install` then `npm run dev`

💍 Happy customizing! ✨
