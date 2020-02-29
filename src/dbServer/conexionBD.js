const Sequelize = require('sequelize');

// configuración 
require('dotenv').config();

// abre conexion
/* const conexionBD = new Sequelize(process.env.DB_NAME, process.env.DB_DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
}); */

const conexionBD = new Sequelize(process.env.DB_URL);
module.exports = conexionBD;