﻿var express = require('express');

var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {name: "react + node js example"});
});

module.exports = router;