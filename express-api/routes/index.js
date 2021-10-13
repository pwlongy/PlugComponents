var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.a = 100000
  console.log(req.session)
  res.render('index', { title: 'Express' });
});

module.exports = router;
