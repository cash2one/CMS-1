/**
 * Created by huan on 16/4/29.
 */
var express = require('express');
var app = express();
var port = process.env.PORT || 8888;
// console.log(__dirname + '/dist')
app.use(express.static('./dist'));

app.all('/*', function (req, res) {
  res.sendFile('index.html', {
    root: './dist'
  });
});
app.listen(port);
console.log('server on port ' + port);