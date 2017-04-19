var express = require('express');
var router = express.Router();

/* GET pages. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Order Form',
      h1: 'Order a Professor',
      h2: 'Rich Freeman',
      });
});

router.get('/thanks', function(req, res, next) {
  res.render('thanks', { title: 'Congratulations!',
      h1: 'Thanks for your Order',
      Professor: 'Rich Freeman'
      });
});


module.exports = router;


