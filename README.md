# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator. This website is still in its infancy stanges and I am hoping to begin pushing out content in the following month. This page is mostly for me to remember useful setup things to maintain the site. 

This site is being hosted for free on [Netlify](https://www.netlify.com/). Find out how you can make somethign similar through [this YouTube video](https://www.youtube.com/watch?v=I-hYKNgaMmE)

## Installation

```console
cd my-website
yarn install
```

When you run yarn install, a '.docusaurus' and 'node_modules' folder will be built that are necessary to run yarn start.

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service. There's really no reason to do this as Netlify has to do this on their end anyways. 

## Update

```console
yarn upgrade
```

In order to keep dependencies up to date, run this command from time to time.

## Deployment
```console
git add .
git commit -m 'updates'
git push
```

pushing changes to the master branch on GitHub will automatically tell Netlify to rebuild your website. 