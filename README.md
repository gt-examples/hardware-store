# BuildRight Hardware

A demo hardware store showcasing internationalization with General Translation. Browse tools, lumber, paint, and more — fully translated into multiple languages.

**[Live Demo](https://hardware-store.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

BuildRight Hardware is a realistic e-commerce example app that demonstrates how to internationalize a Next.js storefront using [gt-next](https://www.npmjs.com/package/gt-next). It features a product catalog, shopping cart, project guides with step-by-step instructions, a tool rental page, and a paint calculator — all fully translated.

## GT Features Used

- `<T>` — JSX translation
- `<Tx>` — Dynamic content translation
- `<Currency>` — Locale-aware currency formatting
- `<Num>` — Number formatting
- `<Plural>` — Pluralization
- `<LocaleSelector>` — Language picker
- `getGT` — Server-side string translations
- `loadTranslations` — Local translation storage

## Getting Started

```bash
git clone https://github.com/gt-examples/hardware-store.git
cd hardware-store
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
