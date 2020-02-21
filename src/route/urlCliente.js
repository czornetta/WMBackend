const express = require('express');
const router = express.Router();
const cliente = require('../service/srvCliente');

// CRUD
router.get('/',(req,res) => {
    const result = cliente.get(req);
    res.json({"Resultado":result}); 
}); 

router.post('/',(req,res) => {
    const result = cliente.add(req);
    res.json(result); 
}); 

router.put('/:id',(req,res) => {
    const result = cliente.upd(req);

    if (!result.estadoError){
        res.json(result);
        
    } else { 
        res.status(result.estadoError).json({error : result.error});    
    }
}); 

router.delete('/:id',(req,res) => {
    const result = cliente.del(req);
    res.json(result); 
}); 

// exports
module.exports = router;