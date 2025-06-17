# ARC Constructions Website

A modern, responsive company website for ARC Constructions, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). This site features custom layouts, interactive UI components, and a mobile-first design to showcase ARC Constructions' services, projects, and contact information.

## 🚀 Features

- **Astro.js** for fast, modern static site generation
- **Tailwind CSS** for utility-first, responsive styling
- **Custom Components**: Header, Hero, About Us, Projects Carousel, Services Tabs, Core Values, Contact Form, Footer
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Interactive UI**: Alpine.js-powered carousels and tabbed sections
- **Google Fonts**: Manrope for a clean, professional look
- **Consistent Layout**: Reusable Container component for section alignment
- **Accessible & SEO-friendly**

## 📁 Project Structure

```
arc-constructions/
├── public/
│   ├── favicon.svg
│   └── ...
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── ...
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── AboutUs.astro
│   │   ├── Projects.astro
│   │   ├── Services.astro
│   │   ├── CoreValue.astro
│   │   ├── ContactForm.astro
│   │   ├── Footer.astro
│   │   └── Container.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.js
├── postcss.config.js / postcss.config.cjs
├── tsconfig.json
├── package.json
└── README.md
```

## 🧑‍💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd arc-constructions
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

### Development

Start the local development server:

```sh
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to view the site.

### Building for Production

Build the site for production:

```sh
npm run build
```

The output will be in the `dist/` folder.

### Preview Production Build

Preview the built site locally:

```sh
npm run preview
```

## 📦 Scripts

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build your production site to `./dist/`    |
| `npm run preview` | Preview your build locally                 |
| `npm run astro`   | Run Astro CLI commands                     |

## 🛠️ Customization

- **Tailwind Config:** Edit `tailwind.config.js` for custom colors, fonts, and breakpoints.
- **Global Styles:** Edit `src/styles/global.css` for base styles.
- **Assets:** Place images and icons in `src/assets/images/` and `src/assets/icons/`.
- **Components:** Reusable UI in `src/components/`.

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🏗️ Credits

- Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)
- Starter template: Astro Basics

---

© 2025 ARC Constructions. All rights reserved.
