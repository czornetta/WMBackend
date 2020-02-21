const express = require('express');
const router = express.Router();
const cliente = require('../service/srvCliente');

// Autenticación

router.get('/',(req,res) => {
    const result = cliente.get(req);
    res.json({"Resultado":result}); 
}); 



// exports
module.exports = router;