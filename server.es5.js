'use strict';

require('babel-regenerator-runtime');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var distPath = _path2.default.join(__dirname, 'dist');

var rewritePath = function rewritePath(req, res, next) {
  req.url = req.url.replace(/\/detail(\/.*)?\/static\//, '/');
  next();
};

// Webpack related
if (process.env.NODE_ENV !== 'production') {
  app.use((0, _morgan2.default)('dev'));
  var webpack = require('webpack');
  var devConfig = require('./webpack.config.dev');
  var compiler = webpack(devConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: devConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use((0, _morgan2.default)('combined'));
  app.use((0, _helmet2.default)());
  app.use('/static', _express2.default.static(distPath));
}

// Router
app.get('*', function (req, res, next) {
  var ext = _path2.default.extname(req.url);
  var shouldServeHTML = ext !== '.js' && ext !== '.css';
  if (shouldServeHTML) {
    res.sendFile(_path2.default.join(__dirname, 'index.html'));
  } else {
    next();
  }
}, rewritePath, _express2.default.static(distPath));

var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 3000;

app.listen(port, host, function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.info('listening at ' + host + ':' + port);
});
