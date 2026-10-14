# Ajaiah Darlington - Portfolio Site

My personal portfolio site, covering my work as a data analyst and analytics engineer: featured
projects, experience, certificates, and contact links.

Live at **https://ajaiah-d.github.io/**

Built with React (Create React App) and MUI, and hosted on GitHub Pages.

## Editing content

All of the site's content (projects, experience, stats, certificates, and contact details) lives in
`src/portfolio.js`. The components under `src/components/` only render it, so most updates are
edits to that one file.

## Running locally

```bash
npm install
npm start
```

This starts a dev server at http://localhost:3000 that reloads when you save a change.

## Deploying

```bash
npm run deploy
```

This runs `npm run build` and then pushes the `build/` folder to the `gh-pages` branch, which
GitHub Pages serves. It publishes the live site straight away. `build/` itself is gitignored.
