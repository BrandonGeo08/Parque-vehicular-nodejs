const express = require('express');
const router = express.Router();

const pool = require('../database')


router.get('/relacionvehiculos', async (req, res) => {
    const getData = await pool.query('SELECT * FROM relacionvehiculos');
    res.render('data/relacionvehiculos', {getData});
});


router.post('/relacionvehiculos', async (req, res) =>{
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


router.get('/delete/:id', async (req, res) =>{
    const {id} = req.params;
    await pool.query ('DELETE FROM relacionvehiculos WHERE ID = ?', [id]);
    req.flash('success', 'Informacion eliminada correctamente');
    res.redirect('/data/relacionvehiculos');
});

router.get('/editrelacionvehiculos/:id', async (req, res) =>{
    const {id} = req.params;
    const editData = await pool.query('SELECT * FROM relacionvehiculos WHERE id = ?', [id]);
    res.render('data/editrelacionvehiculos', {data: editData[0]});
});

router.post('/editrelacionvehiculos/:id', async (req, res) =>{
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


module.exports = router