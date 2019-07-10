var express = require('express');
var router = express.Router();

var Cal = require('../models/calculator.js');

// -------------------- get all chats -------------------------//
router.get('/', function (req, res) {
    Cal.find({}, { state: 1, _id: 0 }, function (err, list) {
        if (err) {
            res.json(err);
        }
        res.json(list);
    });
});

router.post('/', function (req, res) {
    Cal.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.get('/delete', function (req, res) {
    Cal.deleteMany(function (err) {
        if (err) return next(err);
        res.json({ success: true, message: 'deleted history' });
    });
});


module.exports = router;