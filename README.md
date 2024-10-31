# Ovidius - Astro & Tailwind CSS Theme by justgoodui.com

Ovidius is a single-author blog theme for Astro.js. Featuring a minimal, slick, responsive and content-focused design. For more Astro.js themes please check [justgoodui.com](https://justgoodui.com/).

![Ovidius Astro.js Theme](public/ovidius-preview.jpg)

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/742M0515/tazmosis.tk)

If you click this☝️ button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.

## Theme Features:

- ✅ Featured post support
- ✅ Subscribe form
- ✅ Tailwind CSS
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## Template Integrations

- @astrojs/tailwind - https://docs.astro.build/en/guides/integrations-guide/tailwind/
- @astrojs/sitemap - https://docs.astro.build/en/guides/integrations-guide/sitemap/
- @astrojs/mdx - https://docs.astro.build/en/guides/markdown-content/
- @astrojs/rss - https://docs.astro.build/en/guides/rss/

## 🚀 Project Structure

Inside of Ovidius Astro theme, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── icons/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── tailwind.config.cjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro (`.astro`) components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## Astro.js Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Want to learn more about Astro.js?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credits

- Demo content generate with [Chat GPT](https://chat.openai.com/)
- Images for demo content from [Unsplash](https://unsplash.com/)

## Astro Themes by Just Good UI

- [Dante](https://github.com/JustGoodUI/dante-astro-theme) is a free single-author blog and portfolio theme. 

## License

Licensed under the [GPL-3.0](https://github.com/JustGoodUI/ovidius-astro-theme/blob/main/LICENSE) license.
