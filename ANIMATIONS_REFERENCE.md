# Animation Modules Reference

## Module Overview

| Module Name | Animation Type | Component File | Key Features |
|------------|---------------|----------------|--------------|
| Hero Pixel Reveal | Scale-In + Reveal | `HeroPixelReveal.tsx` | Green grid explosion, camera focus effect |
| Sticky Background | Pin + Overlay | `StickyBackground.tsx` | Pinned bg, floating glass cards, parallax |
| Data Hotspots | Flicker + Scan | `DataHotspots.tsx` | Scanning boxes, glowing borders, pulse |
| Process Accordion | Scroll Opacity | `ProcessAccordion.tsx` | 4 steps, active/inactive states, progress bars |
| Data Counters | Count-Up | `DataCounters.tsx` | 0→target animation, viewport trigger |

## Animation Specifications

### 1. Hero Pixel Reveal
```
Trigger: Scroll from 0vh to 50vh
Scale: 1.0 → 3.0
Opacity: 1.0 → 0.0
Background Image Opacity: 0.0 → 1.0
Background Image Scale: 1.2 → 1.0
Duration: Scroll-based (smooth)
```

### 2. Sticky Background
```
Scroll Height: 300vh
Pin Duration: Entire scroll
Cards Y Position: +400px → -200px
Card Opacity: 0 → 1 → 1 → 0
Card Scale: 0.8 → 1.0 → 1.0 → 0.8
Parallax: Different speeds per card
Hover Scale: 1.05
```

### 3. Data Hotspots
```
Entry Animation: Flicker (3 steps)
  - Opacity: 0 → 0.3 → 1 → 0.3 → 1
  - Scale: 0.8 → 0.9 → 1.0
Duration: 0.6s with stagger
Scanning Line: Continuous loop (2s)
Pulse Indicator: 2s loop
Glow Effect: Always active
Hover Scale: 1.05
```

### 4. Process Accordion
```
Scroll Height: 400vh
Steps: 4 (each 25% of scroll)

Active Step:
  - Opacity: 100%
  - Scale: 1.05
  - X Position: 0

Inactive Step:
  - Opacity: 30%
  - Scale: 0.95
  - X Position: +20px

Progress Bar: 0% → 100% per step
Transition: Smooth (scroll-based)
Hover: Rotate icon 360° (0.6s)
```

### 5. Data Counters
```
Trigger: 50% in viewport (once)
Duration: 2.5 seconds
Easing: Ease-out quadratic
Start: 0
End: Metric value
Entry Animation:
  - Y Position: +50px → 0
  - Opacity: 0 → 1
  - Stagger: 0.1s between cards
Hover Scale: 1.05
Border Animation: 0% → 100% width (1s)
Pulse Indicator: 2s loop
```

## Scroll Ranges

```
Section                 Scroll Range    Total Height
───────────────────────────────────────────────────
Hero Pixel Reveal       0vh - 200vh     200vh
Sticky Background       200vh - 500vh   300vh
Data Hotspots           500vh - 600vh   100vh
Process Accordion       600vh - 1000vh  400vh
Data Counters           1000vh - 1100vh 100vh
Footer CTA              1100vh+         100vh
Total                                   ~1200vh
```

## Color Schemes

```
Blue Gradient:    from-blue-500 to-cyan-500
Purple Gradient:  from-purple-500 to-pink-500
Orange Gradient:  from-orange-500 to-red-500
Green Gradient:   from-green-500 to-emerald-500
Indigo Gradient:  from-indigo-500 to-blue-500
Teal Gradient:    from-teal-500 to-green-500
```

## Glass Morphism Effect

```css
background: rgba(255, 255, 255, 0.05)
backdrop-filter: blur(10px)
border: 1px solid rgba(255, 255, 255, 0.1)
border-radius: 16px
box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37)
```

## Timing Functions

| Effect | Easing | Duration |
|--------|--------|----------|
| Card Enter | ease-out | 0.5s |
| Hover | spring (300 stiffness) | - |
| Count-up | quadratic ease-out | 2.5s |
| Flicker | ease-in-out | 0.3s |
| Scan | linear | 2s loop |
| Pulse | ease-in-out | 2s loop |

## Viewport Triggers

```
Hero: Always visible (scroll-controlled)
Sticky Cards: Scroll position 0-1
Hotspots: threshold: 0.5, triggerOnce: true
Process Steps: Scroll position 0-1 (per step)
Counters: threshold: 0.5, triggerOnce: true
```

## Performance Metrics

```
First Load JS: ~192 KB
Route Size: 89.7 KB
Shared JS: 102 KB
Build Time: ~55 seconds
Static Pages: 4
Total Packages: 420
```

## Quick Customization Commands

**Change Hero Background:**
```
components/HeroPixelReveal.tsx:26
```

**Modify Card Count:**
```
components/StickyBackground.tsx:7-24
```

**Add Hotspot:**
```
components/DataHotspots.tsx:8-41
```

**Edit Process Steps:**
```
components/ProcessAccordion.tsx:7-41
```

**Update Metrics:**
```
components/DataCounters.tsx:6-41
```

## Animation Libraries Used

- Framer Motion ^11.0.0
- GSAP ^3.12.5
- React Intersection Observer ^9.13.0

## CSS Custom Classes

```css
.pixel-grid        /* Green grid pattern */
.glass-card        /* Glass morphism effect */
.scanning-box      /* Scanning animation */
.glow-border       /* Glowing border effect */
```

## Framer Motion Hooks

```tsx
useScroll()        // Scroll progress tracking
useTransform()     // Value interpolation
useInView()        // Viewport detection
```

## Best Practices

1. Always use `viewport={{ once: true }}` for performance
2. Prefer `transform` and `opacity` for animations
3. Use `passive: true` on scroll listeners
4. Keep scroll ranges consistent
5. Test on various screen sizes
6. Optimize images (WebP, proper sizing)
