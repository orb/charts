var path    = require('path');
var express = require('express');
var hbs     = require('hbs');
var Chance  = require('chance');
var chance  = new Chance();

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.resolve(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', function(request, response) {
  response.render('intro.hbs');
});

app.get('/housecup', function(request, response) {
  response.render('housecup.hbs', {
    gryffindor: 482,
    slytherin: 472,
    ravenclaw: 426,
    hufflepuff: 352
  });
});

app.get('/deaths', function(request, response) {
  response.render('deaths.hbs', {
    books: [{
      title: "Sorcerer's Stone",
      deaths: 2
    }, {
      title: "Chamber of Secrets",
      deaths: 3
    }, {
      title: "Prisoner of Azkaban",
      deaths: 0
    }, {
      title: "Goblet of Fire",
      deaths: 5
    }, {
      title: "Order of the Phoenix",
      deaths: 4
    }, {
      title: "Half-Blood Prince",
      deaths: 8
    }, {
      title: "Deathly Hallows",
      deaths: 26
    }]
  });
});


app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  //var addr = app.address();
  //console.log("Listening", addr.address + ":" + addr.port);
  console.log("Running...")
});
