var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify({name: 'pepe', age: 234}));
});

module.exports = router;
