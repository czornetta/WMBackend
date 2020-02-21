const express = require('express');
const app = express();

const morgan = require('morgan');

const servidorWeb = {};

function iniciarServidor(){

    // configuración
    require('dotenv').config();
    app.set('port',process.env.PORT || 3000);

    // middleware
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    app.use(morgan('dev'));

    // route
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