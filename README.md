# Simple Rich Text documentation

Documentation site built with [VitePress](https://vitepress.dev/).

```sh
npm ci
npm run docs:dev
```

Run `npm run docs:build` to build the site and `npm run docs:preview` to preview the build. Markdown pages live in `docs/`.

## GitHub Pages

The site is configured for a repository named `SimpleRichTextDoc` at `https://<owner>.github.io/SimpleRichTextDoc/`. If the repository name or hosting URL changes, update `base` in `docs/.vitepress/config.mts`.

In the GitHub repository settings, select **Pages → Build and deployment → Source → GitHub Actions**. Push to `main` to trigger the deployment workflow.
