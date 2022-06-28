const globals = require('../styles/globals.css');
const home = require('../styles/Home.module.css')
const bootstrap = require('bootstrap/dist/css/bootstrap.min.css')

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}