# WEATHER INFORMATION

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Environment
Add a  `.env` file and update `REACT_APP_WEATHER_STACK_KEY` as seen in `.env.sample`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Documentation & Architecture

 - `/src` contains the project files
 - `/src/assets` contains assets like icons
 - `/src/components/` contains well defined components to seperate logic
 - `/src/constants` contains constant variables across the app
 - `/src/containers` contains layouts and error boundary'
 - `/src/database` contains mocked database using localStorage
 - `/src/helpers` contains arbitrary helper functions
 - `/src/hooks` contains custom hooks
 - `/src/pages` contains pages and their ui structures
 - `/src/routes` contains route files
 - `/src/services` contains network api calls and mocked network api calls(mocked calls are made here to help in scaling in case of switching to real network calls)
 - `/src/store` contains redux configuration, actions and reducers
 - `/src/types` contains typescript arbitrary types
 - `/src/config` the configuration file for the project