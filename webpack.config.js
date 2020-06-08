const autoprefixer = require('autoprefixer');

function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'postcss-loader',
      options: {
        plugins: () => [autoprefixer()]
      }
    },
    {
      loader: 'sass-loader',
      options: {
        //Prefer Dart Implementation
        implementation: require('sass'),
        webpackImporter: false,
        sassOptions: {
          includePaths: ['./node_modules'],
        }
      },
    }
  ];
}

// [
//   {
//     loader: 'file-loader',
//     options: {
//       name: 'bundle.css',
//     },
//   },
//   {loader: 'extract-loader'},
//   {loader: 'css-loader'},
//   {
//     loader: 'postcss-loader',
//     options: {
//       plugins: () => [autoprefixer()]
//     }
//   },
//   {
//     loader: 'sass-loader',
//     options: {
//       // Prefer Dart Sass
//       implementation: require('sass'),

//       // See https://github.com/webpack-contrib/sass-loader/issues/804
//       webpackImporter: false,
//       sassOptions: {
//         includePaths: ['./node_modules'],
//       },
//     },
//   }
// ],
// },
// {
// test: /\.js$/,
// loader: 'babel-loader',
// query: {
//   presets: ['@babel/preset-env'],
// },
// }
// ],
// },
// }

module.exports = [
  {
    entry: './assets/scss/login.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-login.js',
    },
    module: {
      rules: [{
        test: /\login.scss$/,
        use: getStyleUse('bundle-login.css')
      }]
    },
  },
  {
    entry: "./login.js",
    output: {
      filename: "bundle-login.js"
    },
    module: {
      rules: [{
        test: /login.js$/,
        loader: 'babel-loader',
        query: {presets: ['@babel/preset-env']}
      }]
    },
  },
  {
    entry: './assets/scss/home.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-home.js',
    },
    module: {
      rules: [{
        test: /home.scss$/,
        use: getStyleUse('bundle-home.css')
      }]
    },
  },
  {
    entry: "./home.js",
    output: {
      filename: "bundle-home.js"
    },
    module: {
      rules: [{
        test: /home.js$/,
        loader: 'babel-loader',
        query: {presets: ['@babel/preset-env']}
      }]
    },
  }

]