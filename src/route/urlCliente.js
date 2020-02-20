const express = require('express');
const router = express.Router();
const cliente = require('../service/srvCliente');

router.get('/',(req,res) => {
    const result = cliente.get(req);
    res.json({"Resultado":result}); 
}); 

router.post('/',(req,res) => {
    const result = cliente.add(req);
    res.json({"Requerimiento":result,
                "Resultado":"OK"}); 
}); 

router.put('/',(req,res) => {
    const result = cliente.upd(req);
    res.json({"Resultado":result}); 
}); 

router.delete('/',(req,res) => {
    const result = cliente.del(req);
    res.json({"Resultado":result}); 
}); 

module.exports = router;