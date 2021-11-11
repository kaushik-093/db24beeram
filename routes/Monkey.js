var express = require('express');
const Monkey_controlers= require('../controllers/Monkey'); 
var router = express.Router();

/* GET home page. */
router.get('/', Monkey_controlers.Monkey_view_all_Page );

module.exports = router;
