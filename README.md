# Seed Chrome Extension - Static Website

A modern, clean static website for the Seed Chrome extension built with Astro and deployed on GitHub Pages.

## Overview

This website serves as the landing page for Seed, an AI-powered test data generator Chrome extension. The site features:

- Modern, responsive design inspired by Anthropic's aesthetic
- Animated hero section with typed.js text animation
- Feature showcase with Anthropic-inspired color palette (oat, cactus, heather)
- Privacy Policy page with markdown rendering
- Mobile-first, accessible design
- Optimized for performance and SEO
- Automatic deployment to GitHub Pages via GitHub Actions

**Live Site**: [https://abhivaikar.github.io/seed-static-site/](https://abhivaikar.github.io/seed-static-site/)

## Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16.0 - Static site generator
- **Animation**: [Typed.js](https://github.com/mattboldt/typed.js/) v2.1.0 - Text typing animation
- **Styling**: Custom CSS with CSS variables and fluid typography
- **Deployment**: GitHub Pages via GitHub Actions
- **Node**: v20 or higher

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── favicon.png             # 32x32 PNG favicon
│   ├── favicon-16.png          # 16x16 PNG favicon
│   ├── favicon.svg             # SVG favicon (fallback)
│   ├── logo.png                # Header logo (32x32 display)
│   ├── icons/
│   │   └── icon128.png         # 128x128 logo for CTA section
│   ├── images/
│   │   ├── hero-poster-image.png       # Hero section screenshot
│   │   └── features/                   # Feature section images
│   │       ├── static.png
│   │       ├── custom.png
│   │       ├── ai-panel.png
│   │       └── ai-autofill-panel.png
│   ├── robots.txt              # Search engine robots file
│   └── styles/
│       └── global.css          # Global CSS utilities
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── Button.astro        # Reusable button component
│   │   ├── CTA.astro           # Call-to-action section with logo
│   │   ├── Demo.astro          # Demo/video section
│   │   ├── Features.astro      # Features grid with images
│   │   ├── Footer.astro        # Site footer
│   │   ├── Hero.astro          # Hero section with typed.js animation
│   │   └── Navigation.astro    # Sticky navigation header
│   ├── content/                # Markdown content files
│   │   └── privacy-policy.md   # Privacy policy content
│   ├── layouts/                # Page layouts
│   │   └── BaseLayout.astro    # Base layout with CSS variables
│   └── pages/                  # Page routes
│       ├── index.astro         # Landing page
│       └── privacy-policy.astro # Privacy policy page
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js v20 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abhivaikar/seed-static-site.git
cd seed-static-site
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

Build the static site:

```bash
npm run build
```

The built site will be in the `./dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This site supports two deployment options:

### Deploy to Netlify (Recommended for PR Previews)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/abhivaikar/seed-static-site)

**Features:**
- Automatic preview deployments for every pull request
- Instant rollbacks
- Deploy previews at unique URLs
- No merge required to test changes

**Setup:**
1. Click the "Deploy to Netlify" button above
2. Authenticate with GitHub
3. Netlify will automatically detect the `netlify.toml` configuration
4. Every PR will get a unique preview URL

### Deploy to GitHub Pages (Production)

This site automatically deploys to GitHub Pages when you push to the `main` branch.

### Initial Setup for GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the sidebar
3. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (not "Deploy from a branch")
4. Push to `main` branch to trigger deployment

The site will be available at: `https://abhivaikar.github.io/seed-static-site/`

### Configuration

The site is configured in [astro.config.mjs](astro.config.mjs):

```js
export default defineConfig({
  site: 'https://abhivaikar.github.io',
  base: '/seed-static-site',  // Must match your repository name
  integrations: [sitemap()],
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  compressHTML: true
});
```

**Important**: The `base` path must match your GitHub repository name for assets to load correctly.

## Key Features

### Hero Section with Typed Animation

The hero section features an animated text effect using typed.js:
- Cycles through: "static", "custom", "AI powered"
- Configuration in [src/components/Hero.astro](src/components/Hero.astro)
- Customizable typing speed, back speed, and delay

### Feature Cards

Feature cards use Anthropic-inspired background colors:
- **Oat**: `#e3dacc` - Static Data Generators, Auto Fill Forms
- **Cactus**: `#bcd1ca` - Custom Templates
- **Heather**: `#cbcadb` - AI-Powered Generation

Each feature card includes an icon, description, and screenshot image.

### Responsive Design

- Mobile-first approach with fluid typography using `clamp()`
- Breakpoints: 640px, 768px, 1024px
- Horizontal feature cards on desktop, stacked on mobile

## Updating Content

### Landing Page Sections

1. **Hero Section**: Edit [src/components/Hero.astro](src/components/Hero.astro)
   - Update title, description, or typed animation words
   - Replace hero image at `public/images/hero-poster-image.png`

2. **Features**: Update the `features` array in [src/components/Features.astro](src/components/Features.astro)
   - Add/remove features
   - Update descriptions, icons, or images
   - Feature images go in `public/images/features/`

3. **Demo Section**: Modify [src/components/Demo.astro](src/components/Demo.astro)
   - Currently shows placeholder for future video demo

4. **CTA Section**: Edit [src/components/CTA.astro](src/components/CTA.astro)
   - Update heading text
   - Change button text or behavior

### Privacy Policy

Edit the markdown file at [src/content/privacy-policy.md](src/content/privacy-policy.md). Changes are automatically reflected on the privacy policy page.

### Navigation & Footer

- **Navigation**: [src/components/Navigation.astro](src/components/Navigation.astro)
  - Links: Features, Seed in action, Privacy
  - Logo displays in header

- **Footer**: [src/components/Footer.astro](src/components/Footer.astro)
  - Copyright notice
  - Links to privacy policy

### Styling & Theme

Global styles and CSS variables are in [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro):

```css
:root {
  /* Colors - Anthropic Style */
  --color-bg: #faf9f0;
  --color-bg-card: #f5f3ea;
  --color-text: #1a1918;
  --color-text-secondary: #5a5856;
  --color-accent: #d97757;
  --color-accent-hover: #c66847;
  --color-border: #e8e6dd;

  /* Fluid Typography */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  /* ... more sizes */

  /* Fluid Spacing */
  --spacing-xs: clamp(0.5rem, 0.45rem + 0.25vw, 0.75rem);
  --spacing-sm: clamp(1rem, 0.9rem + 0.5vw, 1.5rem);
  /* ... more sizes */
}
```

### Buttons

Buttons are currently set to `href="javascript:void(0)"` to prevent navigation. When ready to launch:

1. Update button hrefs in:
   - [src/components/Hero.astro](src/components/Hero.astro) (line 16)
   - [src/components/CTA.astro](src/components/CTA.astro) (line 15)

2. Replace with Chrome Web Store URL:
   ```astro
   <Button href="https://chrome.google.com/webstore/detail/your-extension-id">
     Install Extension
   </Button>
   ```

## Design System

### Typography

- **Font**: Plus Jakarta Sans (Google Fonts)
- **Scale**: Fluid typography using `clamp()` for responsive sizing
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Colors

Inspired by Anthropic's design system:
- Warm, earthy background tones
- Subtle, low-contrast cards
- Warm orange accent color
- High text contrast for accessibility

### Spacing

Fluid spacing system using `clamp()` ensures consistent proportions across all screen sizes.

## Performance Optimizations

- ✅ CSS inlining for critical styles
- ✅ HTML compression
- ✅ Automatic sitemap generation
- ✅ Lazy loading for feature images
- ✅ Optimized asset bundling
- ✅ Mobile-first responsive design

## Commands Reference

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Test locally: `npm run build && npm run preview`
5. Commit: `git commit -m "Add my feature"`
6. Push: `git push origin feature/my-feature`
7. Submit a pull request

## Troubleshooting

### Assets Not Loading on GitHub Pages

If CSS, images, or other assets fail to load after deployment:

1. Verify `base` in `astro.config.mjs` matches your repository name
2. Check that all asset references use `${import.meta.env.BASE_URL}/path/to/asset`
3. Ensure GitHub Pages is set to use "GitHub Actions" as the source
4. Check the Actions tab for deployment errors

### Typed.js Animation Not Working

If the typed animation doesn't appear:

1. Check browser console for errors
2. Verify typed.js is installed: `npm list typed.js`
3. Clear browser cache and hard refresh

## Links

- **Live Site**: [https://abhivaikar.github.io/seed-static-site/](https://abhivaikar.github.io/seed-static-site/)
- **Repository**: [https://github.com/abhivaikar/seed-static-site](https://github.com/abhivaikar/seed-static-site)
- **Chrome Extension**: Coming soon!

## Support

For issues or questions:
- Open an issue: [GitHub Issues](https://github.com/abhivaikar/seed-static-site/issues)
- Check Astro docs: [astro.build](https://astro.build)

---

Built with [Astro](https://astro.build) 🚀
