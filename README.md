# Minimal Elder.js Template Project

<img src="https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Node&query=engines.node&url=https%3A%2F%2Fraw.githubusercontent.com%2Felderjs%2Ftemplate%2Fmaster%2Fpackage.json" alt="node version" />
This is a **minimal** project template for [Elder.js](https://elderguide.com/tech/elderjs/) apps.
If you are new you should start with the full template: https://github.com/elderjs/template
For reference:
- Elder.js source is here: https://github.com/elderjs/elderjs
- Elder.js Docs are on [ElderGuide.com](https://elderguide.com/tech/elderjs/)
## Get started
To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit Elderjs/minimal elderjs-minimal
cd elderjs-minimal
==============================
git remote -v
git remote add origin https://github.com/alami/elter-template.git
git remote remove origin
git remote add origin https://github.com/alami/elter-template.git
git push --force
git push --set-upstream origin master
git remote -v
origin  https://github.com/alami/elter-template.git (fetch)
origin  https://github.com/alami/elter-template.git (push)
=================================================================
```

### Install the dependencies:

```bash
npm install # or just yarn
```

### Start Project:

```bash
npm start
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running.

### Development:

For development, we recommend running two separate terminals. One for the server and the other for rollup.
**Terminal 1**

```bash
npm run dev:server # `npm start` above starts a server, but doesn't rebuild your Svelte components on change.
```

**Terminal 2**

```bash
npm run dev:rollup # This rebuilds your svelte components on change.
```

Once you have these two terminals open, edit a component file in `src`, save it, and reload the page to see your changes.

### To Build HTML:

```bash
npm run build
```

This will build all of your html into the /public/ folder.

### What to Expect

- Nodemon is watching your files for changes. It will restart when it needs to.
- Rollup is watching your files for changes. It will restart when it needs to.
- If your `elder.config.js` has `@elderjs/plugin-browser-reload': {}` in it's plugins, your browser will automatically restart after the server restarts.
