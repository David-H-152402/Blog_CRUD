var express = require('express');
var router = express.Router();
var app = express()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

app.use(function(req, res, next) {
  console.log("Looking for URL: " + req.url);
  next();
});

router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'Express'
  });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', {
    title: 'Express'
  });
});
router.get('/login', function(req, res, next) {
  res.render('login', {
    title: 'Express'
  });
});
module.exports = router;
