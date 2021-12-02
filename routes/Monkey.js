var express = require('express');
const Monkey_controlers= require('../controllers/Monkey'); 
var router = express.Router();
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/', Monkey_controlers.Monkey_view_all_Page );
/* GET detail Monkey page */ 
router.get('/detail', Monkey_controlers.Monkey_view_one_Page); 
/* GET create Monkey page */ 
router.get('/create', secured, Monkey_controlers.Monkey_create_Page); 
/* GET create update page */ 
router.get('/update', secured, Monkey_controlers.Monkey_update_Page); 
/* GET create costume page */ 
router.get('/delete', secured, Monkey_controlers.Monkey_delete_Page);  

module.exports = router;
