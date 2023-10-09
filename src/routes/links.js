/**Requiriendo las dependencias/modulos a utilizar */
const express = require('express');
const router = express.Router();
const pool = require('../database')
const {isLoggedIn} = require('../lib/auth')


//Vista de la tabal CRUD de parque vehicular relacion de vheiculos y polizas de seguro 
router.get('/relacionvehiculos', isLoggedIn, async (req, res) => {
    const getData = await pool.query('SELECT * FROM relacionvehiculos');
    res.render('data/relacionvehiculos', {getData});
});


//Metodo para agregar información relacion de vehiculos y polizas de seguro  
router.post('/relacionvehiculos', isLoggedIn, async (req, res) =>{
    const {clvEmpleado,sucursal,nomEmpleado,apPaterno,apMaterno,yearModelo,
        modelo,colorMoto,numSerie,numPlacas,numPoliza,numInciso,polizaVencimiento,
        numFactura,fechaFactura,subtotalFactura,ivaFactura,totalFactura,aseguradora,
        estadoPoliza,observaciones} =  req.body;
    
    const newData = {
        clvEmpleado,sucursal,nomEmpleado,apPaterno,apMaterno,yearModelo,
        modelo,colorMoto,numSerie,numPlacas,numPoliza,numInciso,polizaVencimiento,
        numFactura,fechaFactura,subtotalFactura,ivaFactura,totalFactura,aseguradora,
        estadoPoliza,observaciones
    };
    await pool.query('INSERT INTO relacionvehiculos set ?', [newData]);
    req.flash('success', 'Informacion agregada correctamente');
    res.redirect('/data/relacionvehiculos');
});

//Metodo eliminar información relacion de vehiculos y polizas de seguro  
router.get('/delete/:id', isLoggedIn, async (req, res) =>{
    const {id} = req.params;
    await pool.query ('DELETE FROM relacionvehiculos WHERE ID = ?', [id]);
    req.flash('success', 'Informacion eliminada correctamente');
    res.redirect('/data/relacionvehiculos');
});

//Vista para editar información relacion de vehiculos y polizas de seguro  
router.get('/editrelacionvehiculos/:id', isLoggedIn, async (req, res) =>{
    const {id} = req.params;
    const editData = await pool.query('SELECT * FROM relacionvehiculos WHERE id = ?', [id]);
    res.render('data/editrelacionvehiculos', {data: editData[0]});
});

//Metodo editar información relacion de vehiculos y polizas de seguro  
/**
 * @param {number} clvEmpleado - clave numerica del empleado
 */
router.post('/editrelacionvehiculos/:id', isLoggedIn, async (req, res) =>{
    const {id} = req.params;
    const {clvEmpleado,sucursal,nomEmpleado,apPaterno,apMaterno,yearModelo,
        modelo,colorMoto,numSerie,numPlacas,numPoliza,numInciso,polizaVencimiento,
        numFactura,fechaFactura,subtotalFactura,ivaFactura,totalFactura,aseguradora,
        estadoPoliza,observaciones} =  req.body;
    
    const newData = {
        clvEmpleado,sucursal,nomEmpleado,apPaterno,apMaterno,yearModelo,
        modelo,colorMoto,numSerie,numPlacas,numPoliza,numInciso,polizaVencimiento,
        numFactura,fechaFactura,subtotalFactura,ivaFactura,totalFactura,aseguradora,
        estadoPoliza,observaciones
    };
    await pool.query('UPDATE relacionvehiculos set ? WHERE id = ?', [newData, id]);
    req.flash('success', 'Informacion editada correctamente');
    res.redirect('/data/relacionvehiculos');
});

/**Vista del apartado checklist */
router.get('/checklist', (req, res) => {
    res.render('data/checklist');
});


module.exports = router