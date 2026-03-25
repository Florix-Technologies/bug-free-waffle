# Scrollytelling Landing Page

A highly interactive scrollytelling landing page built with Next.js, Tailwind CSS, Framer Motion, and GSAP. Features advanced scroll-based animations including pixel reveals, sticky backgrounds, scanning hotspots, process accordions, and count-up animations.

## Features

### 1. Hero Pixel Reveal
- Green pixelated grid that scales and fades on scroll
- Reveals high-resolution background image underneath
- Camera-focusing transition effect

### 2. Sticky Background with Floating Cards
- Pinned background image
- Glass-morphism UI cards with parallax effects
- Cards slide up at different speeds

### 3. Scanning Data Hotspots
- Floating information boxes with flicker entry effects
- Glowing borders and scanning animations
- Positioned over background images

### 4. Vertical Process Accordion
- Four-step process visualization
- Scroll-based opacity transitions
- Active step scales up to 105%, inactive at 30%
- Smooth state transitions

### 5. Number Count-Up Modules
- Animated counters from 0 to target value
- Triggered when scrolling into viewport
- Performance metrics display

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP with ScrollTrigger** - Scroll-based animations
- **React Intersection Observer** - Viewport detection

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── HeroPixelReveal.tsx    # Hero section with pixel animation
│   ├── StickyBackground.tsx   # Sticky section with cards
│   ├── DataHotspots.tsx       # Scanning hotspots
│   ├── ProcessAccordion.tsx   # Vertical process steps
│   └── DataCounters.tsx       # Count-up animations
├── hooks/
│   ├── useScrollProgress.ts   # Scroll progress hook
│   ├── useCountUp.ts          # Count-up animation hook
│   └── useParallax.ts         # Parallax effect hook
└── public/                    # Static assets
```

## Animation Modules

| Module Name | Animation Name | Description |
|------------|----------------|-------------|
| Hero Zoom | Scale-In + Reveal | Green grid explodes/scales to reveal landscape |
| Sticky Section | Pin + Overlay | Background stays fixed while text blocks slide |
| Data Hotspots | Framer-Motion Hover | Blue scanning boxes with flicker/glitch effects |
| Step-by-Step | Vertical Accordion | Active step highlights while others dim |
| Data Counter | Count-Up | Numbers animate from 0 to final value |

## Customization

### Update Images

Replace the Unsplash image URLs in each component with your own images:

```tsx
backgroundImage: 'url(YOUR_IMAGE_URL)'
```

### Modify Animations

Adjust timing and effects in the component files:

- **Duration**: Change `duration` values in Framer Motion props
- **Delays**: Modify `delay` values for staggered animations
- **Easing**: Update `transition` types and easing functions

### Change Colors

Edit the Tailwind config or use Tailwind classes:

```tsx
className="from-blue-500 to-cyan-500"
```

## Performance Optimization

- All scroll listeners use `passive: true`
- Animations use GPU-accelerated transforms
- Images are loaded from Unsplash CDN
- Components use `viewport={{ once: true }}` to prevent re-animations

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT

## Credits

Built with modern web technologies and inspired by professional scrollytelling experiences.
