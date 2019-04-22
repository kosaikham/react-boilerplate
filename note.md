# Js tooling with react

- first install webpack, webpack-cli in dev-dependencies
- we can install via npm like this `npm i -D webpack webpack-cli`
- then we need to create `webpack.config.js` file and specify some configurations
- then in order to transpile, we need to install babel
- here is how babel is installed in this lecture,

```
npm i -D @babel/core @babel/cli @babel/preset-env
```

- After installing these above libs, configure in `webpack.config.js` as below:

```
module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  }
```

- Ater adding configuration to the file, let's create react App component in src folder
- And now we need to install `react` and `react-dom` by `npm i -S react react-dom`
- Then create App component and index.js to render to DOM
- But current babel doesn't know `<App/>` syntax, so we need another babel lib called `@babel/preset-react` and use it in the presets array which is configured in `webpack.config.js` like this

```
options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
```

- So far so good. So now we need to render our app to browser. we need html file. In order to do that, we need to install a dev-dependency called `html-webpack-plugin` and after installing, go again to `webpack.config.js` and configure as below:

```
const HtmlWebpackPlugin = require("html-webpack-plugin");
...
module: {},
plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
```

- Then create a html file with an `id#app` div in the `src` directory

- So far here, we need to run `npm run build` every time we make changes to the application. So, It's better if there is a watch man to our application and auto rebuild if something is changed in the application. So now, we make a new script in package.json like this.

```
"dev": "webpack --watch --mode development",
```

- Then run `npm run dev`
- Now, separate our `webpack.config.js` into 3 files : `webpack.config.base.js`, `webpack.config.dev.js` and `webpack.config.prod.js`.
- Then copy all lines from `webpack.config.js` into `base.js` file and remove `mode: "production"`.
- And then, install `webpack-merge` in `dev-dependencies` and require it to `dev.js` and `prod.js`.

```
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development"
});
```

- According to this code, you can get the point. Move on.
- So far so good. Now our application is pretty straight forward, But we are just calling file system directly as opposed to use development server. So we need to install `webpack-dev-server` in dev-dependencies and modify the existing script by replacing `webpack` to `webpack-dev-server` like this.

```
"dev": "webpack-dev-server --open --config webpack.config.dev.js",
```

- The `--open` flag is used to open in browser automically when we run this script.
- We can also customize the application port number in `webpack.config.dev.js` by adding `devServer` as follow:

```
mode: "development",
  devServer: {
    port: "9000"
  }
```

## Finish 13, and next from 14
