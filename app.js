const express = require('express');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.render('index');
});

const port = process.env.PORT || 8888;

app.listen(port, function () {
  console.log('Server has  started successful on port ' + port);
});
