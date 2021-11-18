var express = require('express');
const Monkey_controlers= require('../controllers/Monkey'); 
var router = express.Router();

/* GET home page. */
router.get('/', Monkey_controlers.Monkey_view_all_Page );
/* GET detail Monkey page */ 
router.get('/detail', Monkey_controlers.Monkey_view_one_Page); 
/* GET create Monkey page */ 
router.get('/create', Monkey_controlers.Monkey_create_Page); 
/* GET create update page */ 
router.get('/update', Monkey_controlers.Monkey_update_Page); 
/* GET create costume page */ 
router.get('/delete', Monkey_controlers.Monkey_delete_Page);  

module.exports = router;
