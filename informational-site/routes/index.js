var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'bolainas' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'Nous sommes fatigees' });
});

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'contact us' });
});

module.exports = router;
