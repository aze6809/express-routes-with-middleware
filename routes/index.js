var express = require('express');
var router = express.Router();

const birds = require('./room1');

/* GET home page. */
router.get('/', function(req, res, next) {
  //<a href="/path">Click Here</a>
  res.send(`<p>You're on a path in the woods. At the end of that path is a cabin. Within that cabin, there's something special.</p> <a href="/room1">Proceed to the cabin</a>`);
 // res.send('<button>some html</button>');
  //res.render('index', { title: 'Express' });
  
});
router.use('/birds', birds);

// POST method route
router.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
module.exports = router;
