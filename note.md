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

# Finish 10, start from 11
