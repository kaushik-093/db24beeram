var Monkey = require('../models/Monkey'); 
 
// List of all Costumes 
exports.Monkey_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Monkey list'); 
}; 
 
// for a specific Monkey. 
exports.Monkey_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Monkey detail: ' + req.params.id); 
}; 
 
// Handle Monkey create on POST. 
exports.Monkey_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Monkey create POST'); 
}; 
 
// Handle Monkey delete form on DELETE. 
exports.Monkey_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Monkey delete DELETE ' + req.params.id); 
}; 
 
// Handle Monkey update form on PUT. 
exports.Monkey_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Monkey update PUT' + req.params.id); 
}; 