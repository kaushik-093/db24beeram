var Monkey = require('../models/Monkey'); 
 
// List of all Monkey 
exports.Monkey_list = async function(req, res) { 
    try{ 
        theMonkey = await Monkey.find(); 
        res.send(theMonkey); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Monkey. 
exports.Monkey_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Monkey.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Monkey create on POST. 
exports.Monkey_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Monkey(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Monkey_type":"goat", "cost":12, "size":"large"} 
    document.name = req.body.name; 
    document.color = req.body.color; 
    document.weight = req.body.weight; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Monkey delete form on DELETE. 
exports.Monkey_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Monkey delete DELETE ' + req.params.id); 
}; 
 
// Handle Monkey update form on PUT. 
exports.Monkey_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Monkey.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.name)  
               toUpdate.name = req.body.name; 
        if(req.body.color) toUpdate.color = req.body.color; 
        if(req.body.weight) toUpdate.weight = req.body.weight; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 

// VIEWS 
// Handle a show all view 
exports.Monkey_view_all_Page = async function(req, res) { 
    try{ 
        theMonkey = await Monkey.find(); 
        res.render('Monkey', { title: 'Monkey Search Results', results: theMonkey }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 