/**Requiriendo las dependencias/modulos a utilizar */
const express = require('express');

/**
 * Guardamos en una constante un metodo de express
 * llamdo routers que nos devuelve un objeto 
 */
const router = express.Router();

/**
 * Definiendo la ruta inicial 
 */
router.get('/', (req, res)=>{
    res.send('Mi abuelito te preta')
})


/**Guardamos la coneccion de la base de datos en una constante */
const pool = require('../database')

module.exports = router