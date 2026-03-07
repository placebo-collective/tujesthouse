# Tu Jest House

Strona projektu "Tu Jest House" - wydarzenia kulturalne łączące edukację, muzykę elektroniczną i rozwój sceny klubowej w Polsce.

## Tech Stack

Next.js 16 • React 19 • TypeScript • SCSS • Tina CMS • GitHub Pages

## Development

```bash
npm install
npm run dev:tina
```

Open [http://localhost:3000/admin](http://localhost:3000/admin)

## Build

```bash
npm run build:gh-pages
npm run preview
```

## Scripts

- `dev:tina` - Development server with Tina CMS
- `build:gh-pages` - Build for GitHub Pages
- `lint` - ESLint + TypeScript check
- `prepush` - Run all checks before commit

## Deployment

Push to `main` branch → Auto-deploy via GitHub Actions → https://tujesthouse.pl

See [PERFORMANCE.md](PERFORMANCE.md) for optimization details.

## 📄 License

Private project - all rights reserved.
