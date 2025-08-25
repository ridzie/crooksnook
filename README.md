# Astro Starter Blog

Kickstart your blog with Astro’s blog starter template:

```sh
npm create astro@latest -- --template blog
```

##  Project Structure

The Astro project:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

- **src/pages/**: Add `.astro` or `.md` files here—each one becomes a route on your site.
- **src/components/**: Astro, React, Vue, Svelte, or Preact components.
- **src/content/**: Store collections of Markdown/MDX documents here. You can use `getCollection()` to fetch posts (like from `src/content/blog/`), and type-check your frontmatter with a schema. See [Astro’s Content Collections docs](https://docs.astro.build/en/guides/content-collections/) for more info.
- **public/**: Put any static files (like images) here.

## 🧞 Useful Commands

Run these in your project root:

| Command                   | What it does                                      |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Install dependencies                              |
| `npm run dev`             | Start the local dev server at `localhost:4321`    |
| `npm run build`           | Build your production site to `./dist/`           |
| `npm run preview`         | Preview your build locally before deploying       |
| `npm run astro ...`       | Run Astro CLI commands (`astro add`, `astro check`, etc.) |
| `npm run astro -- --help` | See available Astro CLI options                   |

