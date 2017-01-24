import 'babel-regenerator-runtime';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import helmet  from 'helmet';

const app = express();
const distPath = path.join(__dirname, 'dist');

const rewritePath = (req, res, next) => {
  req.url = req.url.replace(/\/detail(\/.*)?\/static\//, '/');
  next();
};


// Webpack related
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
  const webpack = require('webpack');
  const devConfig = require('./webpack.config.dev');
  const compiler = webpack(devConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:     true,
    publicPath: devConfig.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(morgan('combined'));
  app.use(helmet());
  app.use('/static', express.static(distPath));
}


// Router
app.get('*', (req, res, next) => {
  const ext = path.extname(req.url);
  const shouldServeHTML = ext !== '.js' && ext !== '.css';
  if (shouldServeHTML) {
    res.sendFile(path.join(__dirname, 'index.html'));
  } else {
    next();
  }
}, rewritePath, express.static(distPath));


const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;


app.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`listening at ${host}:${port}`);
});
