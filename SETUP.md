# Scrollytelling Landing Page - Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Animation Modules Implemented

### 1. Hero Pixel Reveal (Scale-In + Reveal)
**Component:** `components/HeroPixelReveal.tsx`

- Green pixelated grid overlay
- Scales from 1x to 3x on scroll
- Opacity fades from 1 to 0
- Reveals high-resolution background image
- Camera-focusing transition effect
- Scroll indicator with animated mouse

**Customization:**
- Change background image in line 26
- Adjust scale range in line 12
- Modify pixel grid size in `globals.css`

### 2. Sticky Background with Floating Cards (Pin + Overlay)
**Component:** `components/StickyBackground.tsx`

- Background image pinned during scroll
- 4 glass-morphism cards with parallax
- Cards slide up at different speeds
- Hover effects with scale animations
- Opacity and position transitions

**Customization:**
- Edit card content in `cards` array (lines 7-24)
- Change background image in line 45
- Adjust scroll heights in line 34

### 3. Scanning Data Hotspots (Flicker + Glitch Entry)
**Component:** `components/DataHotspots.tsx`

- Floating information boxes
- Flicker entry animation
- Scanning line effects
- Glowing borders
- Pulsing indicators
- Positioned over background

**Customization:**
- Edit hotspot data in `hotspots` array (lines 8-41)
- Change background image in line 52
- Adjust positions in hotspot objects

### 4. Vertical Process Accordion (Scroll-Based Opacity)
**Component:** `components/ProcessAccordion.tsx`

- 4-step process visualization
- Active step at 105% scale, 100% opacity
- Inactive steps at 95% scale, 30% opacity
- Smooth scroll-based transitions
- Progress bar for each step
- Gradient color themes

**Customization:**
- Edit steps in `steps` array (lines 7-41)
- Change background image in line 58
- Modify opacity ranges in lines 113-116

### 5. Number Count-Up Modules (Animated Counters)
**Component:** `components/DataCounters.tsx`

- 6 performance metrics
- Count from 0 to target value
- 2.5-second animation duration
- Triggered on viewport entry
- Easing function for smooth animation
- Gradient text effects

**Customization:**
- Edit metrics in `metrics` array (lines 6-41)
- Adjust animation duration in line 113
- Change colors in metric objects

## Custom Hooks

### useScrollProgress
**File:** `hooks/useScrollProgress.ts`

Tracks scroll progress between two viewport positions.

```tsx
const progress = useScrollProgress(0, 2); // 0vh to 200vh
```

### useCountUp
**File:** `hooks/useCountUp.ts`

Animates numbers from 0 to target value when element enters viewport.

```tsx
const { ref, count } = useCountUp(69, 2000); // Target: 69, Duration: 2000ms
```

### useParallax
**File:** `hooks/useParallax.ts`

Creates parallax scroll effects with customizable speed.

```tsx
const offset = useParallax(0.5); // 50% scroll speed
```

## Animation Technologies

- **Framer Motion**: Main animation library
  - useScroll for scroll-based animations
  - useTransform for value interpolation
  - motion components for declarative animations

- **GSAP ScrollTrigger**: Advanced scroll control
  - Smooth scroll synchronization
  - Trigger management

- **React Intersection Observer**: Viewport detection
  - Trigger animations on element visibility
  - One-time or repeating animations

## Performance Optimizations

1. **GPU Acceleration**
   - All transforms use translateZ(0)
   - Animations use transform and opacity

2. **Passive Scroll Listeners**
   - All scroll events use `{ passive: true }`

3. **One-Time Animations**
   - Most animations use `viewport={{ once: true }}`

4. **Image Loading**
   - High-quality Unsplash images via CDN
   - Lazy loading enabled

5. **Code Splitting**
   - Next.js automatic code splitting
   - Dynamic imports where needed

## Customization Guide

### Change Images

Replace Unsplash URLs throughout the components:

```tsx
backgroundImage: 'url(YOUR_IMAGE_URL_HERE)'
```

Recommended image sizes:
- Hero: 2000x1200px
- Backgrounds: 1920x1080px
- Hotspots: 1920x1080px

### Modify Animation Timing

**Scroll Speed:**
```tsx
// Adjust offset ranges
offset: ['start start', 'end start']
```

**Animation Duration:**
```tsx
transition={{ duration: 0.8 }} // in seconds
```

**Delays:**
```tsx
transition={{ delay: 0.2 }} // stagger effect
```

### Change Colors

Use Tailwind gradient utilities:
```tsx
className="from-blue-500 to-cyan-500"
```

Or custom colors in `tailwind.config.ts`.

### Add New Sections

1. Create new component in `components/`
2. Import in `app/page.tsx`
3. Add between existing sections
4. Use existing patterns for consistency

## Troubleshooting

**Build Errors:**
```bash
npm run build
```
Check console for TypeScript or ESLint errors.

**Animation Performance:**
- Reduce number of animated elements
- Increase throttle on scroll listeners
- Use `will-change` CSS property sparingly

**Images Not Loading:**
- Check Unsplash URLs are valid
- Verify Next.js image domains in `next.config.mjs`

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

All animations gracefully degrade on older browsers.

## Production Deployment

```bash
npm run build
npm start
```

Or deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## Support

For issues or questions:
- Check component files for inline documentation
- Review Framer Motion docs: https://www.framer.com/motion/
- Next.js documentation: https://nextjs.org/docs

## License

MIT - Free to use and modify
