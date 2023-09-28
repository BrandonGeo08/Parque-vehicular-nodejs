const express = require('express');
const router = express.Router();

const pool = require('../database')


router.post('/add', async (req, res) =>{
    const {clvEmpleado,sucursal,nomEmpleado,apPaterno,apMaterno,yearModelo,
        modelo,colorMoto,numSerie,numPlacas,numPoliza,numInciso,polizaVencimiento,
        numFactura,fechaFactura,subtotalFactura,ivaFactura,totalFactura,aseguradora,
        estadoPoliza,observaciones} =  req.body;
    
    const newData = {
        clvEmpleado,sucursal,nomEmpleado,apPaterno,apMaterno,yearModelo,
        modelo,colorMoto,numSerie,numPlacas,numPoliza,numInciso,polizaVencimiento,
        numFactura,fechaFactura,subtotalFactura,ivaFactura,totalFactura,aseguradora,
        estadoPoliza,observaciones
    }
    await pool.query('INSERT INTO relacionvehiculos set ?', [newData])
    res.render('links/add')
});

router.get('/add', async (req, res) => {
    const links = await pool.query('SELECT * FROM relacionvehiculos');
    res.render('links/add', {links: links});
 });

module.exports = router