# List of companies with filters

## Overview

The project is divided into server and client.

React is used in the frontend and ExpressJS in the backend.

Demo can be found [here](https://search-list-client.herokuapp.com/)

## Possible future improvements:

- More filters and clear filters option.
- Use Apollo client for handling state and API communication and Apollo server for the server API
- Use real database.
- Support for multiple specialty filters.
- Use React Virtualized for handling infinity scroll.
- Add tests.
- Add option for details view.
- Add more columns of cards depending on resolution.
- Add a hook for debouncing the search in order to decrease the number of requests to the API
- Responsive design.
- Add CI
- Use Semantic Release to handle releases and generate a CHANGELOG

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run server`

Starts the API server.

### `npm start`

Runs the app in production mode.

### `npm run build`

Builds the app for production to the `build` folder.
