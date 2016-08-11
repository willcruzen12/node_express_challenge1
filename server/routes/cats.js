var express = require("express");
var router = express.Router();

var cats = [{name: 'Luna', trait: 'Fiesty'}];

router.get('/', function(req, res) {
  res.send(cats);
});

router.post('/', function(req, res) {
  console.log('request: ', req.body);
  cats.push(req.body);
  res.sendStatus(201);
});

module.exports = router;
