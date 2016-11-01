var express = require('express');
var router = express.Router();
var knex = require('../knex');
const boom = require('boom');
const {
  camelizeKeys,
  decamelizeKeys
} = require('humps');
/* GET home page. */

// Route for main blog page
router.get('/', function(req, res, next) {
  knex('posts').orderBy('created_at', 'DESC').then(posts => {
    res.render('posts', {
      posts: posts
    });
  })
});

//Route to view a selected Post
router.get('/:id', (req, res, next) => {
  const id = Number.parseInt(req.params.id);

  if (Number.isNaN(id)) {
    return next();
  }

  knex('posts')
    .where('id', id)
    .first() // we get a db row {id: num,title:'somethng',body:'body of the post'}
    .then((postData) => {
      if (!postData) {
        throw boom.create(404, 'Not Found');
      }
      res.render('post', {
        post: postData
      });
    })
    .catch((err) => {
      next(err);
    });
});
//========= Route to Create a New Post ===>
router.get('/new', (req, res, next) => {
  console.log("testing new page");
  res.render('new', {
    posts: "this is testing 123"
  });
})

router.post('/new/posting', (req, res, next) => {
  knex('posts').insert({
      title: req.body.title,
      body: req.body.body
    }).then(function() {
      res.redirect('/posts')
    })
    .catch((err) => {
      next(err);
    });

});
// router.post('/edit', (req, res, next) => {
//   const {
//     title,
//     body
//   } = req.body;
//   if (!title || !title.trim()) {
//     return next(boom.create(400, 'Title must not be blank'));
//   }
//   if (!body || !body.trim()) {
//     return next(boom.create(400, 'Body must not be blank'));
//   }
//   const insertPost = {
//     title,
//     body
//   };
//   knex('posts')
//     .insert(insertPost, '*')
//     .then((rows) => {
//       res.redirect("/posts")
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

// ===== Route for Editing a selected Post ==>
router.get('/edit/:id', (req, res, next) => {
  knex('posts')
    .where('id', req.params.id)
    .first()
    .then((postToEdit) => {
      if (!postToEdit) {
        throw boom.create(404, 'Not Found');
      }
      console.log("testing FINAL route");
      console.log(postToEdit);
      res.render('edit', {
        post: postToEdit
      });
    })
})

router.post('/edit/:id', (req, res, next) => {
  console.log(req.title);
  knex('posts')
    .where('id', req.params.id)
    .update({
      title: req.body.title,
      body: req.body.body
    }).then(function() {
      res.redirect('/posts')
    })
    .catch((err) => {
      next(err);
    });
});

// router.delete('/:id', (req, res, next) => {
//   knex('posts')
//     .del()
//     .where('id', req.params.id)
//     .then(function() {
//       res.redirect('/posts')
//     })
//     .catch((err) => {
//       next(err);
//     });
// });
//========================================
router.delete('/:id', (req, res, next) => {
  console.log("Testing Damn DELETE Route");
  const id = Number.parseInt(req.params.id);
  if (Number.isNaN(id)) {
    return next();
  }
  let post;
  knex('posts')
    .where('id', id)
    .first()
    .then((row) => {
      if (!row) {
        throw boom.create(404, 'Not Found');
      }

      post = camelizeKeys(row);

      return knex('books')
        .del()
        .where('id', id);
    })
    .then(() => {
      delete post.id;

      res.send(post);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
