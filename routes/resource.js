var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Monkey_controller = require('../controllers/Monkey'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Monkey ROUTES /// 
 
// POST request for creating a Monkey.  
router.post('/Monkey', Monkey_controller.Monkey_create_post); 
 
// DELETE request to delete Monkey. 
router.delete('/Monkey/:id', Monkey_controller.Monkey_delete); 
 
// PUT request to update Monkey. 
router.put('/Monkey/:id', Monkey_controller.Monkey_update_put); 
 
// GET request for one Monkey. 
router.get('/Monkey/:id', Monkey_controller.Monkey_detail); 
 
// GET request for list of all Monkey items. 
router.get('/Monkey', Monkey_controller.Monkey_list); 
 
module.exports = router; 