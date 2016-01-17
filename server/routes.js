var fs = require('fs');
var url = require('url');

var routes = (app) => {
  app.get('/', (req, res) => {
    fs.readFile('./www/html/index.html', 'utf8', (error, html) => {
      res.send(html);
    });
  });
};

module.exports = routes;
