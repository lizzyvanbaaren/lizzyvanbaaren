# 🎨 Style Guide & Design System

This document outlines the comprehensive design system for the website. Use this guide to maintain consistency and make global style changes efficiently.

## 🎯 Quick Style Changes

To modify the entire website's appearance, edit these key files:
- **`src/index.css`** - Core design tokens and section variants
- **`tailwind.config.ts`** - Additional theme configuration
- **Button variants** - `src/components/ui/button.tsx`

## 🎨 Color Palette

### Core Colors (HSL Values)
```css
--primary: 8 76% 68%;        /* Coral/Salmon */
--secondary: 215 20% 65%;    /* Blue-gray */
--accent: 215 25% 58%;       /* Medium blue-gray */
--muted: 215 15% 95%;        /* Very light blue-gray */
--foreground: 215 25% 27%;   /* Dark blue-gray */
--background: 0 0% 100%;     /* Pure white */
```

### Section Background Variants
```css
--section-white: 0 0% 100%;    /* Pure white sections */
--section-primary: 8 76% 68%;  /* Coral sections */
--section-secondary: 215 20% 65%; /* Blue-gray sections */
--section-muted: 215 15% 97%;  /* Light gray sections */
--section-accent: 215 25% 58%; /* Accent sections */
--section-warm: 8 45% 95%;     /* Warm gradient sections */
--section-cool: 215 25% 95%;   /* Cool gradient sections */
```

## 📐 Section Layouts

### Section Component Usage
```tsx
import { Section } from "@/components/ui/section";

// Different background variants
<Section variant="white">White background</Section>
<Section variant="primary">Coral background</Section>
<Section variant="secondary">Blue-gray background</Section>
<Section variant="muted">Light gray background</Section>
<Section variant="warm">Warm gradient background</Section>
<Section variant="cool">Cool gradient background</Section>

// Different sizes
<Section size="default">Standard padding (py-16 md:py-20)</Section>
<Section size="sm">Small padding (py-12 md:py-16)</Section>
<Section size="none">No padding (custom)</Section>
```

### Section Utilities
```css
.container-section     /* Standard section container with padding */
.container-section-sm  /* Smaller section container */
.grid-feature         /* 2-column grid for features */
.grid-content         /* 2-3 column grid for content */
```

## 🃏 Enhanced Cards

### Card Variants
```tsx
import { CardEnhanced } from "@/components/ui/card-enhanced";

<CardEnhanced variant="default">Standard card</CardEnhanced>
<CardEnhanced variant="elevated">Elevated card with backdrop blur</CardEnhanced>
<CardEnhanced variant="glass">Glass morphism effect</CardEnhanced>
<CardEnhanced variant="minimal">Minimal border-left design</CardEnhanced>
<CardEnhanced variant="feature">Feature card for highlights</CardEnhanced>

// With hover effects
<CardEnhanced hover="lift">Lifts on hover</CardEnhanced>
<CardEnhanced hover="scale">Scales on hover</CardEnhanced>
<CardEnhanced hover="glow">Glows on hover</CardEnhanced>
```

## 🔘 Button System

### Button Variants
```tsx
<Button variant="default">Primary coral button</Button>
<Button variant="secondary">Blue-gray button</Button>
<Button variant="outline">Outline button</Button>
<Button variant="hero">Hero button with gradient</Button>
<Button variant="ghost">Ghost button</Button>
<Button variant="link">Link-style button</Button>

// Special variants for colored sections
<Button className="btn-on-primary">Button for primary sections</Button>
<Button className="btn-on-secondary">Button for secondary sections</Button>
```

## 📝 Typography Scale

### Heading Classes
```css
.text-section-heading      /* Main section headings (3xl-4xl) */
.text-section-subheading   /* Sub headings (xl-2xl) */
.text-section-body         /* Body text with optimal line height */
```

### Font System
- **Display font**: Used for headings (`font-display`)
- **Sans font**: Used for body text (`font-sans`)

## 🎭 Interactive Elements

### Link Animations
```css
.story-link        /* Animated underline on hover */
.hover-scale       /* Scale effect on hover */
```

### Photo Treatments
```css
.brand-photo       /* Enhanced photo styling with filters */
.brand-photo-wrap  /* Photo container with overlay gradient */
```

## 🌟 Special Effects

### Shadows & Glows
```css
--shadow-elegant   /* Elegant card shadow */
--shadow-card      /* Standard card shadow */
--shadow-glow      /* Signature glow effect */
--shadow-section   /* Subtle section shadow */
```

### Gradients
```css
--gradient-primary    /* Primary coral gradient */
--gradient-secondary  /* Secondary blue-gray gradient */
--gradient-warm       /* Warm section gradient */
--gradient-cool       /* Cool section gradient */
--gradient-subtle     /* Subtle background gradient */
```

## 🚀 Implementation Examples

### Creating a Featured Section
```tsx
<Section variant="primary" size="default">
  <div className="grid-feature">
    <div className="space-y-6">
      <h2 className="text-section-heading">Featured Content</h2>
      <p className="text-section-body">Description text...</p>
      <Button className="btn-on-primary">Call to Action</Button>
    </div>
    <CardEnhanced variant="glass" hover="lift">
      <CardEnhancedContent>Card content...</CardEnhancedContent>
    </CardEnhanced>
  </div>
</Section>
```

### Creating a Content Grid
```tsx
<Section variant="warm" size="sm">
  <h2 className="text-section-heading text-center mb-12">Services</h2>
  <div className="grid-content">
    {services.map(service => (
      <CardEnhanced key={service.id} variant="elevated" hover="scale">
        <CardEnhancedHeader>
          <CardEnhancedTitle>{service.title}</CardEnhancedTitle>
        </CardEnhancedHeader>
        <CardEnhancedContent>
          <p>{service.description}</p>
        </CardEnhancedContent>
      </CardEnhanced>
    ))}
  </div>
</Section>
```

## 🎛️ Quick Customization

### To Change the Overall Color Scheme:
1. Update HSL values in `src/index.css` under `:root`
2. Adjust section variants if needed
3. Test in both light and dark modes

### To Add New Section Variants:
1. Add new CSS variables in `src/index.css`
2. Create new utility classes
3. Update the `Section` component variants

### To Modify Button Styles:
1. Edit `buttonVariants` in `src/components/ui/button.tsx`
2. Add new variant options
3. Update button utilities for colored sections

## 📱 Responsive Considerations

- All sections are mobile-first responsive
- Grid layouts automatically adapt to screen size
- Typography scales appropriately
- Cards stack on mobile devices
- Hover effects are touch-friendly

---

**Pro Tip**: To quickly test style changes, use the browser's developer tools to modify CSS custom properties in real-time before making code changes.