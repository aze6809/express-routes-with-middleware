var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`You're standing at the cabin door. There's a lock in place. It seems to require a password. The cabin looks... (insert text here that goes in param) <input type='text'> </input>`);
});

module.exports = router;
