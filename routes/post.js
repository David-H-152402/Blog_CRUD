var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('post', {
    title: 'Express'
  });
});
// router.get('/new', function(req, res, next) {
//   res.render('posts', {
//     title: 'Express'
//   });
// });

module.exports = router;
