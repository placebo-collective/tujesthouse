# Tu Jest House

Strona projektu "Tu Jest House" - cykl wydarzeń kulturowych łączących edukację, muzykę elektroniczną i rozwój sceny klubowej w Polsce. Wydarzenia odbywają się w pięciu miastach (Warszawa, Wrocław, Poznań, Kraków, Toruń) między majem a wrześniem 2026.

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.0 (App Router, React Server Components)
- **UI**: React 19.2.3
- **Styling**: SCSS Modules
- **CMS**: Tina CMS 2.1.9 (local mode)
- **Forms**: Formspree integration
- **TypeScript**: 5.8.3 (strict mode)
- **Linting**: ESLint 9 (flat config)
- **Deployment**: GitHub Pages (static export)

## 📁 Project Structure

```
tujesthouse-app/
├── content/              # Content managed by Tina CMS (JSON files)
│   ├── sections/        # Homepage sections (hero, about, program, cities, forms)
│   ├── layout/          # Header and footer content
│   └── forms/           # Form labels and options
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # React components
│   │   ├── forms/       # Form components with validation
│   │   ├── layout/      # Header, Footer, StructuredData
│   │   └── sections/    # Homepage section components
│   ├── hooks/           # Custom React hooks (useFormSubmit)
│   ├── lib/             # Utilities and types
│   │   ├── content-types.ts    # TypeScript interfaces
│   │   ├── tina.ts             # Content fetching functions
│   │   ├── constants.ts        # Site configuration
│   │   └── utils/              # Utility functions
│   └── globals.css      # Global styles
└── public/              # Static assets
```

## 🛠️ Development

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

### Development with Tina CMS

```bash
npm run dev:tina
```

Interfejs edycji dostępny na [http://localhost:3000/admin](http://localhost:3000/admin).

## 📝 Zarządzanie treścią (Tina CMS)

Cała treść strony jest zarządzana przez Tina CMS w trybie lokalnym. Treści przechowywane są w plikach JSON w folderze `content/`.

### Sposoby edycji:

1. **Bezpośrednia edycja plików JSON** w folderze `content/`
   - Szybka edycja w dowolnym edytorze tekstu
   - Kontrola wersji przez Git
   - Wymaga znajomości struktury JSON

2. **Interfejs wizualny Tina CMS**
   - Uruchom `npm run dev:tina`
   - Otwórz [http://localhost:3000/admin](http://localhost:3000/admin)
   - Edytuj treści w przyjaznym interfejsie
   - Aby skonfigurować: zobacz [TINA_SETUP.md](TINA_SETUP.md)

### Struktura treści:

- `content/sections/` - Sekcje strony głównej
- `content/layout/` - Nagłówek i stopka
- `content/forms/` - Formularze aplikacyjne

## 🧪 Code Quality

### Type Checking

```bash
npx tsc --noEmit
```

### Linting

```bash
npm run lint
```

Automatycznie naprawia problemy ESLint i sprawdza typy TypeScript.

### Formatting

```bash
npm run format
```

Formatuje kod za pomocą Prettier.

### Pre-push Validation

```bash
npm run prepush
```

Uruchamia wszystkie sprawdzenia (TypeScript + ESLint + Prettier) przed commitowaniem.

## 📦 Build & Deployment

### Build dla GitHub Pages

```bash
npm run build:gh-pages
```

Tworzy statyczną wersję strony w folderze `out/` z kopiami `CNAME` i `.nojekyll`.

### Preview lokalny

```bash
npm run preview
```

Serwuje zbudowaną wersję lokalnie do testowania.

## 🔐 Bezpieczeństwo

- **Brak sekretów**: Wszystkie klucze API są bezpieczne dla publicznego repozytorium
- **Formspree**: Form IDs są publiczne, zabezpieczenia konfigurowane w dashboardzie Formspree
- **Tina CMS**: Tryb lokalny, brak połączeń z chmurą
- **.gitignore**: Pliki `.env` są automatycznie ignorowane

## 🌐 Deployment

Strona wdrożona na **GitHub Pages**:

- URL: https://tujesthouse.pl
- Branch: wyeksportowany statyczny build z `out/`
- CNAME: Skonfigurowany dla niestandardowej domeny

## 📚 Scripts Reference

| Script              | Opis                                             |
| ------------------- | ------------------------------------------------ |
| `dev`               | Uruchamia serwer deweloperski Next.js            |
| `dev:tina`          | Uruchamia Next.js z interfejsem Tina CMS         |
| `build`             | Buduje aplikację Next.js                         |
| `build:gh-pages`    | Buduje z konfiguracją dla GitHub Pages           |
| `start` / `preview` | Serwuje zbudowaną wersję lokalnie                |
| `lint`              | Sprawdza i naprawia problemy ESLint + TypeScript |
| `format`            | Formatuje kod za pomocą Prettier                 |
| `prepush`           | Uruchamia wszystkie sprawdzenia przed commitem   |

## 💡 Key Features

- ✅ Fully typed with TypeScript (strict mode)
- ✅ Content managed through Tina CMS
- ✅ SEO optimized (robots.txt, sitemap.xml, structured data)
- ✅ Responsive design with SCSS modules
- ✅ Form submissions via Formspree
- ✅ Custom hooks for reusable logic
- ✅ Generic utilities for content loading
- ✅ ESLint + Prettier configured
- ✅ Static export ready for GitHub Pages

## 📄 License

Private project - all rights reserved.
