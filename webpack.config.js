const path = require("path");

module.exports = {
  // [mode] will determine how our code will be bundled.
  // "development" will be human readable
  // "production" will be minified
  mode: "development",
  // [entry] this is the file where the bundling starts from.
  entry: ".client/src/index.jsx",
  // [output] is a configuration object to determine how and where to bundle our code
  output: {
    // [path] is where to output
    path: path.join(__dirname, 'public'),
    // [filename] is the name of the file
    filename: "bundle.js"
  }
}