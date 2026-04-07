# 💍 Bharath & Thraya - Premium React Engagement Invitation

A modern, responsive, and beautifully animated engagement invitation website built with React, Tailwind CSS, and Framer Motion.

## ✨ Features

### Premium Enhancements
- **Modern React Architecture** - Built with React 18 and TypeScript
- **Smooth Animations** - Framer Motion for elegant transitions
- **Responsive Design** - Perfect on mobile, tablet, and desktop
- **Glass Morphism Effects** - Sophisticated glassmorphic components
- **Advanced Countdown Timer** - Real-time event countdown
- **Particle Effects** - Animated sparkle canvas background
- **Music Integration** - Background music with toggle control
- **RSVP Form** - Fully functional form with success feedback
- **Intersection Observer** - Section animations on scroll
- **Green Deep Tones** - Premium deep green and gold color scheme

### Sections
1. **Curtain Overlay** - Dramatic opening animation
2. **Hero Section** - Names and tagline with gradient text
3. **Couple Section** - Beautiful card layout with hover effects
4. **Save the Date** - Premium date display card
5. **Event Details** - When & where information with Google Maps link
6. **Countdown Timer** - Days, hours, minutes, seconds to event
7. **Photo Gallery** - Responsive image gallery
8. **RSVP Form** - Contact information collection with validation
9. **Closing Section** - Blessings and closing message
10. **Footer** - Social hashtag and credits

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory:**
   ```bash
   cd engagement-invitation
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
engagement-invitation/
├── src/
│   ├── components/
│   │   ├── CurtainOverlay.tsx       # Opening curtain animation
│   │   ├── HeroSection.tsx          # Hero with names & tagline
│   │   ├── CoupleSection.tsx        # Bride & groom cards
│   │   ├── SaveTheDateSection.tsx   # Date display card
│   │   ├── EventDetailsSection.tsx  # Venue & time info
│   │   ├── CountdownSection.tsx     # Countdown timer
│   │   ├── GallerySection.tsx       # Photo gallery
│   │   ├── RSVPSection.tsx          # RSVP form
│   │   ├── ClosingSection.tsx       # Closing message
│   │   ├── MusicToggle.tsx          # Music control button
│   │   └── SparkleCanvas.tsx        # Particle effects
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles
├── assets/
│   └── music.mp3                    # Background music (add your own)
├── public/                          # Static files
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── index.html                       # HTML template
```

## 🎨 Customization

### Event Details
Edit the date and venue in components:
- `src/components/CountdownSection.tsx` - Change event date
- `src/components/SaveTheDateSection.tsx` - Update save the date
- `src/components/EventDetailsSection.tsx` - Modify venue & time

### Names & Text
Update couple names in:
- `src/components/CurtainOverlay.tsx`
- `src/components/HeroSection.tsx`
- `src/components/CoupleSection.tsx`
- `src/components/ClosingSection.tsx`

### Colors
Customize the color palette in `tailwind.config.js`:
```javascript
colors: {
  gold: '#C9A84C',
  wine: '#722F37',
  'deep-green': '#1B4332',
  // ... more colors
}
```

### Fonts
The project uses premium Google Fonts:
- **Display:** Playfair Display
- **Body:** Cormorant Garamond
- **Script:** Great Vibes
- **Sans:** Josefin Sans

### Photos
To add couple and gallery photos:

1. Place images in the `assets/` folder
2. Update the components to use actual image paths instead of emojis

Example for couple photos in `CoupleSection.tsx`:
```jsx
<img src="assets/groom.jpg" alt="Bharath" className="w-full h-full object-cover" />
```

### Background Music
Add your own background music:
1. Place `music.mp3` file in `assets/` folder
2. Ensure it's a royalty-free track (romantic piano, sitar, etc.)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Build first
npm run build

# Drag & drop 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Update `vite.config.ts` with your repo name
2. Run `npm run build`
3. Push to GitHub

## 📱 Browser Support
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎵 Music & Animations
- Smooth curtain opening animation
- Scroll-triggered section animations
- Particle effects background
- Interactive hover effects
- Mobile-optimized transitions

## 🔧 Development Tips

### Debug Mode
- Open browser DevTools (F12)
- Components use React hooks for state management
- Framer Motion provides motion debugging via props

### Performance
- Lazy loading images recommended
- Use `shouldReduceMotion` for accessibility
- Canvas particle count can be adjusted in `SparkleCanvas.tsx`

## 📄 License
Made with ❤️ for Bharath & Thraya

## 🤝 Support
For questions or customization:
- Check the component files for inline documentation
- Review Tailwind CSS docs: https://tailwindcss.com
- Framer Motion docs: https://www.framer.com/motion

---

**Ready to celebrate? Let's make this invitation unforgettable! 💍✨**
