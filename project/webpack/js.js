const path = require('path');
module.exports = function(paths) {
  return (
    [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
    ]
  )
};
