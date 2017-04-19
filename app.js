var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.set('views', path.join(__dirname, 'views'));

// setup stripe
var stripe = require('stripe')('sk_test_LpRUKyVAik6UdrX9TP1uFlF8');

//process payment get token
app.post('/charge', function(req, res) {
    var stripeToken = req.body.stripeToken;
    var amount = 1000;


    stripe.charges.create({
        card: stripeToken,
        currency: 'cad',
        amount: amount
    },

 //thanks page works but with the ejs templates it is missing a title but I can't figure out why it's doing this. Same problem with error.
    function(err, charge) {
        if (err) {
            res.render('error' )
        } else {
            res.render('thanks');
        }
    });
});


module.exports = app;
