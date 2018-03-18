# front-end-recruitment

> Front-end test

Using:
- Vue.js 2
	- Vue CLI - for scaffolding project and webpack
	- Vue Resource - for HTTP requests
	- Vuex - for state management
- Native LocalStorage API - for data persistence
- Express.js - for serving JSON
	- Express CORS Middleware
- Nodemon - for watching for server changes

## Requirements

- Node.js
- NPM/Yarn

## Getting started

Make sure your packages are installed, executing the following commands on your terminal:
``` bash
yarn
# or
npm install
```

### Now, run the API server

Start the server using:
``` bash
yarn run server
# or
npm run server
```
It will start the API server, serving a JSON data on `http://localhost:3001/api/products`. Keep the API server up, because these data are necessary to the application to work.

### Then, run the webpack dev server

``` bash
# serve with hot reload at localhost:8080
yarn run dev
# or
npm run dev
```
When ready, your browser will automatically open a new tab with the app running.

### Or, bundle all the assets

``` bash
# build for production with minification
yarn run build
# or
npm run build
```
Bundling all the assets, you'll need a webserver to view the app. You can use `live-server`, `http-server`, or any other; only install using `npm install` or `yarn add` and start it using the package name as the command.
