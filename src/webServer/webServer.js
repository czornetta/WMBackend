const express = require('express');
const app = express();
const morgan = require('morgan');
//const autorizacion = require('../service/srvAutorizacion');

const servidorWeb = {};

function iniciarServidor(){

    // configuración 
    require('dotenv').config();
    app.set('port',process.env.WEB_PORT);

    // middleware
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    app.use(morgan('dev'));

    // route
    
    // autorizacion
    //app.use('/api/cliente',autorizacion);
    
    // Cliente
    app.use('/api/cliente',require('../route/urlCliente'));

    // Unidad


    // inicio
    app.listen(app.get('port'),()=>{
        console.log('servidor Web en puerto', app.get('port'));
    })
}

servidorWeb.iniciarServidor = iniciarServidor;
module.exports = servidorWeb;