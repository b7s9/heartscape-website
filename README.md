# Senior Project Website

## Docs

Uses [Eleventy](https://www.11ty.dev), [Tailwind CSS](https://tailwindcss.com), [Alpine.js](https://github.com/alpinejs/alpine).

Requires [NodeJS](https://nodejs.org/en/download/). I recommend the LTS version for y'all. If you don't already have [git on your windows machine](https://git-scm.com/downloads), grab that as well.

## Instructions

### Installation

```
git clone https://github.com/b7s9/heartscape-website.git
cd heartscape-website
npm install
```

### Production build

#### Automated

Any commit to master branch will be detected and built by Netlify.

#### Manual

This changes the baseURL to remote, and optimizes a few things. The resulting `_site/` directory can be copied onto remote.

```
npm run build
```

**On your first install:**, you'll need to run the production script one time before being able to run in dev mode

### Local Dev

The following command watches for changes on save and updates changes available to you on [localhost:8080](http://localhost:8080), as long as the script is running in your terminal. 
```
npm start
```

Press `ctrl` + `c` to stop it.

## Credits

Template and [article](https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/) by [Greg Wolanski](https://gregwolanski.com)

MIT License
