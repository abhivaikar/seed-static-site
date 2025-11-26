# SEED Extension Website

A modern, clean static website for the SEED Chrome extension built with Astro and deployed on GitHub Pages.

## Overview

This website serves as the landing page and documentation hub for SEED, an AI-powered test data generator Chrome extension. The site features:

- Modern, responsive design inspired by Anthropic's website
- Landing page with hero, features, demo, and CTA sections
- Privacy Policy page with markdown rendering
- Mobile-first, accessible design
- Optimized for performance and SEO
- Automatic deployment to GitHub Pages

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: Custom CSS with CSS variables (no framework needed)
- **Deployment**: GitHub Pages via GitHub Actions
- **Node**: v20 or higher

## Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── favicon.svg             # Site favicon
│   ├── robots.txt              # Search engine robots file
│   └── styles/
│       └── global.css          # Global CSS utilities
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── Button.astro
│   │   ├── CTA.astro
│   │   ├── Demo.astro
│   │   ├── Features.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── Navigation.astro
│   ├── content/                # Markdown content files
│   │   └── privacy-policy.md
│   ├── layouts/                # Page layouts
│   │   └── BaseLayout.astro
│   └── pages/                  # Page routes
│       ├── index.astro         # Landing page
│       └── privacy-policy.astro
├── astro.config.mjs            # Astro configuration
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js v20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone https://github.com/abhijeetvaikar/seed-static-site.git
cd seed-static-site
```

2. Install dependencies:
```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

The site will be available at `http://localhost:4321`

### Building for Production

Build the static site:

```sh
npm run build
```

The built site will be in the `./dist/` directory.

### Preview Production Build

Preview the production build locally:

```sh
npm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages when you push to the `main` branch.

### Initial Setup for GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. The site will be available at: `https://abhijeetvaikar.github.io/seed-static-site/`

### Configuration

Update the following in [astro.config.mjs](astro.config.mjs):

```js
export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPO-NAME',
  // ...
});
```

Also update [.github/workflows/deploy.yml](.github/workflows/deploy.yml) if needed.

## Updating Content

### Landing Page

The landing page is composed of several sections. To update:

1. **Hero Section**: Edit [src/components/Hero.astro](src/components/Hero.astro)
2. **Features**: Update the `features` array in [src/components/Features.astro](src/components/Features.astro)
3. **Demo/Screenshots**: Modify [src/components/Demo.astro](src/components/Demo.astro)
4. **CTA**: Edit [src/components/CTA.astro](src/components/CTA.astro)

### Privacy Policy

Edit the markdown file at [src/content/privacy-policy.md](src/content/privacy-policy.md). The changes will automatically be reflected on the privacy policy page.

### Styling

Global styles and CSS variables are defined in:
- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) - CSS variables and base styles
- [public/styles/global.css](public/styles/global.css) - Utility classes

To change the color scheme, update the CSS variables in `BaseLayout.astro`:

```css
:root {
  --color-bg: #FFFFFF;
  --color-text: #1A1A1A;
  --color-accent: #D97706;
  /* ... */
}
```

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Use the `BaseLayout` component
3. Add navigation links in `Navigation.astro` and `Footer.astro`

Example:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Navigation from '../components/Navigation.astro';
import Footer from '../components/Footer.astro';
---

<BaseLayout title="New Page">
  <Navigation currentPath="/new-page" />
  <main>
    <h1>New Page</h1>
  </main>
  <Footer />
</BaseLayout>
```

## Design Guidelines

The website follows these design principles:

- **Clean and minimal**: Inspired by Anthropic's design
- **Mobile-first**: Responsive design starting from mobile
- **Accessible**: WCAG AA compliant
- **Fast**: Optimized images, minified assets, fast load times
- **SEO-friendly**: Proper meta tags, sitemap, semantic HTML

## Performance Optimizations

- CSS inlining for critical styles
- HTML compression
- Sitemap generation
- Optimized asset loading
- Mobile-first responsive images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Commands Reference

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro ...` | Run Astro CLI commands |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run build && npm run preview`
5. Submit a pull request

## License

[Add your license here]

## Links

- [SEED Chrome Extension](https://chrome.google.com/webstore)
- [GitHub Repository](https://github.com/abhijeetvaikar/seed-extension)
- [Report Issues](https://github.com/abhijeetvaikar/seed-extension/issues)

## Support

For questions or issues related to the website, please [open an issue](https://github.com/abhijeetvaikar/seed-static-site/issues).
