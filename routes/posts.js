var express = require('express');
var router = express.Router();
var knex = require('../knex');
/* GET home page. */
router.get('/', function(req, res, next) {
  knex('posts').then(posts => {
    res.render('posts', {
      posts: posts
    });
  })

});
// router.get('/new', function(req, res, next) {
//   res.render('blog', {
//     title: 'Express'
//   });
// });


// app.put
// app.post
// app.delete


module.exports = router;
