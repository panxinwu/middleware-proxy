var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/delete', function(req, res, next) {
    var query = req.query;
    console.log(query);
    request.get({
        url: 'http://zhang.jd.com/cart/delete',
        qs: query, 
        json: true
    },function (e, r, b) {
      console.log(b);
      res.send(200, JSON.parse(b));
    });
    // res.send(200, res.json({
    //     no: 1
    // }));
});

module.exports = router;
