const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//  RESTful API
const publicPath = path.resolve(__dirname);
console.log('publicPath: ', publicPath);
app.use(bodyParser.json({
  type: 'application/json'
}));
app.use(express.static(publicPath));
const port = 8888;
// this is necessary to handle URL correctly since client uses Browser History
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '', 'index.html'), {
    root: __dirname
  });
});
app.put('/api/login', function (req, res) {
  const credentials = req.body;
  if (credentials.user === 'admin' && credentials.password === '123456') {
    res.cookie('uid', '1', {
      domain: '127.0.0.1'
    });
    res.json({
      'user': credentials.user,
      'role': 'ADMIN',
      'uid': 1
    });
  } else {
    res.status('500').send({
      'message': 'Invalid user/password'
    });
  }
});
app.post('/api/menu', function (req, res) {
  res.json({});
});
app.post('/api/my', function (req, res) {
  res.json({
    'user': 'admin',
    'role': 'ADMIN',
    'uid': 1
  });
});
app.post('/api/logout', function (req, res) {
  res.clearCookie('uid');
  res.json({
    'user': 'admin',
    'role': 'ADMIN'
  });
});
app.listen(port, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Server running on port ' + port);
});