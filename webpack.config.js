const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env) => {
  const isDev = env.mode === 'development';
  const isProd = !isDev;

  return {
    entry: './src/index.tsx',
    mode: isProd ? 'production' : isDev && 'development',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'public/')
    },
    devtool: isDev ? 'eval-source-map' : false,
    devServer: {
      contentBase: 'public',
      hot: true,
      open: true,
      port: 1337,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        }
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', 'json']
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin()
    ],
  };
};
