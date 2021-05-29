---
path: testing-with-webpack-but-where-are-my-styles
date: 2021-05-28T23:56:16.004Z
title: Cypress Component Testing, but where are my styles?!
description: A quick walkthrough of what I did in order to get Cypress Component
  testing to work with custom styles
---
If you're as excited as I am about [Cypress Component Testing](https://docs.cypress.io/guides/component-testing/introduction), but are wondering why your styles aren't loading.

We happen to use WebPack to bundle our files, Cypress component testing has fantastic support for using your existing WebPack configuration. In our app, we happen to load a `boostrap.scss` file as part of the main entry.

I recently figured out that Cypress loads their own `browser.js` file in the entry and will override your default webpack configuration entry. Which makes sense, given that we're testing individual components.

If you're running a React application, bundled by webpack, you will likely You will need to configure a `cypress/plugins/index.js` file with [@cypress/webpack-dev-server](https://github.com/cypress-io/cypress/tree/develop/npm/webpack-dev-server)

If you want your custom styles loaded as part of this, you'll need to override the `template` option, with a custom template file.

Here is what I did to make this work:

Create a custom template file in the same plugin location: `/cypress/plugins/emplate.ejs.`

Template Contents:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Components App</title>
    <% const s = require('!!css-loader!sass-loader!../../src/styles/bootstrap.scss').default %>
    <style><%= s.toString() %></style>
    <style>
      #__cy_root {
        padding: 10px
      }
    </style>
  </head>
  <body>
    <div id="__cy_root"></div>
  </body>
</html>
```

These next two lines are critical:

```html
<% const s = require('!!css-loader!sass-loader!../../src/styles/bootstrap_theme.scss').default %>
<style><%= s.toString() %></style>
```

The first line, will override the default loader behavior in your WebPack configuration. The second will take the contents parsed by the loaders and will toss them in between the `<style />` tag. 

Then you'll need to include this in your cypress plugin (`cypress/plugins/index.js`_:

```js
const path = require('path')

const template = path.resolve(__dirname, './template.ejs')

module.exports = (on, config) => {
    if (config.testingType === 'component') {
        const { startDevServer } = require('@cypress/webpack-dev-server')

        const webpackConfig = require('../../webpack.config') // Path to app webpack config

        on('dev-server:start', (options) => {
            return startDevServer({
                options,
                webpackConfig: webpackConfig(),
                template, // Override template option
            })
        })
    }

    return config
}

``` 

Here cypress will use your custom template when testing your custom components.

I received some compile warnings, that seemed to be specific to the node environment cypress was running in, I updated my `cypress.json` file with this line, to ensure that cypress was using my current node environment:

```json
}
  ...  
  "nodeVersion": "system"
}

```

And that was pretty much it, I was now able to test my components with our dedicated application stylesheet.

