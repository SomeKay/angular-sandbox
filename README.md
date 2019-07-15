# AngularSandbox

An Angular playground for exploring different Angular ideas.

Built using the free [Pokemon API](https://pokeapi.co), it is continuosly
deployed [here to Netlify](https://pokemon.poslek.com) where you can try it out.

CI status:
[![Netlify Status](https://api.netlify.com/api/v1/badges/1952423d-31a2-4bc4-8f7c-3c7a613474f2/deploy-status)](https://app.netlify.com/sites/upbeat-allen-8e03e1/deploys)

## Installing

Run `npm install`.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The
app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in
the `dist/` directory. Use the `npm run build:prod` script for a production
build.

## Pre-commit hooks

A set of scripts will run before each commit. You can test those hooks by
running `npm run pre-commit`.

## Running locally using Docker

To run the production build of the application via Docker (available at
`http://localhost:8080/`), do the following:

Build the image: `docker build -t bojzi/angular-sandbox .`

Spin up a container with the image:
`docker run -p 8080:80 bojzi/angular-sandbox`
