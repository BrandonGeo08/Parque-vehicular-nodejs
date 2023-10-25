/**Requiriendo las dependencias/modulos a utilizar */
const express = require('express');
const router = express.Router();
const pool = require('../database')
const { isLoggedIn, isAdmin} = require('../lib/auth');

/** Vista de la tabal CRUD de parque vehicular relacion de vheiculos y polizas de seguro */
router.get('/relacionvehiculos', isLoggedIn, async (req, res) => {
    const getData = await pool.query('SELECT * FROM relacionvehiculos');
    res.render('data/relacionvehiculos', {getData});
});


/**Metodo para agregar información relacion de vehiculos y polizas de seguro
* @param {number} clvEmpleado - toma clave numerica del empleado
* @param {string} sucursal - toma sucursal de la empresa 
* @param {string} nomEmpleado - toma nombre del empleado
* @param {string} apPaterno - toma apellido paterno del empleado
* @param {string} apMaterno - toma apellido materno del empleado 
* @param {number} yearModelo - toma año del modelo de la moto
* @param {string} modelo - toma modelo de la moto 
* @param {string} colorMoto - toma color de la moto
* @param {string} numSerie - toma numero de serie de la moto 
* @param {string} numPlacas - toma numero de placas de la moto 
* @param {string} numPoliza - toma numero de poliza de la moto
* @param {string} numInciso - toma numero de inciso de la moto 
* @param {string} polizaVencimiento - toma fecha de vencimiento de la poliza 
* @param {string} numFactura - toma numero de la factura
* @param {string} fechaFactura - toma fecha en la que se realizo la factura 
* @param {decimal} subtotalFactura - toma costo sub total de la factura 
* @param {decimal} ivaFactura - toma costo del iva de la factura 
* @param {decimal} totalFactura - toma costo total de la factura
* @param {string} aseguradora - toma compañia aseguradora para la moto
* @param {string} observaciones - toma cualquier observacion que necesite 
 */
router.post('/relacionvehiculos', isLoggedIn, async (req, res) => {
    const { clvEmpleado, sucursal, nomEmpleado, apPaterno, apMaterno, yearModelo,
        modelo, colorMoto, numSerie, numPlacas, numPoliza, numInciso, polizaVencimiento,
        numFactura, fechaFactura, subtotalFactura, ivaFactura, totalFactura, aseguradora,
        estadoPoliza, observaciones } = req.body;

    const newData = {
        clvEmpleado, sucursal, nomEmpleado, apPaterno, apMaterno, yearModelo,
        modelo, colorMoto, numSerie, numPlacas, numPoliza, numInciso, polizaVencimiento,
        numFactura, fechaFactura, subtotalFactura, ivaFactura, totalFactura, aseguradora,
        estadoPoliza, observaciones
    };
    await pool.query('INSERT INTO relacionvehiculos set ?', [newData]);
    req.flash('success', 'Informacion agregada correctamente');
    res.redirect('/data/relacionvehiculos');
});


/**
 * Metodo cambiar estado activo o inactivo información relacion de vehiculos y polizas de seguro  
*/
router.get('/inactivo/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    await pool.query('UPDATE relacionvehiculos SET status = 0  WHERE ID = ?', [id]);
    await pool.query('UPDATE relacionvehiculos SET nomEmpleado = "VACANTE", apPaterno = "VACANTE", apMaterno = "VACANTE" WHERE ID = ?', [id])
    req.flash('success', 'Moto en estado inactiva');
    res.redirect('/data/relacionvehiculos');
});
// router.get('/activo/:id', isLoggedIn, async (req, res) => {
//     const { id } = req.params;
//     await pool.query('UPDATE relacionvehiculos SET status = 1  WHERE ID = ?', [id]); 
//     req.flash('success', 'Moto en estado activa');
//     res.redirect('/data/relacionvehiculos');
// });


/**
 * Metodo para eliminar relacion de vehiculos y polizas de seguro  permizo solo admin
*/
router.get('/delete/:id', isLoggedIn, isAdmin, async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM relacionvehiculos WHERE ID = ?', [id]);
    req.flash('success', 'Informacion eliminada correctamente');
    res.redirect('/data/relacionvehiculos');
});


/**Vista para editar información relacion de vehiculos y polizas de seguro  */
router.get('/editrelacionvehiculos/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const editData = await pool.query('SELECT * FROM relacionvehiculos WHERE id = ?', [id]);
    res.render('data/editrelacionvehiculos', { data: editData[0] });
});

/**Metodo editar información relacion de vehiculos y polizas de seguro  */
router.post('/editrelacionvehiculos/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const { clvEmpleado, sucursal, nomEmpleado, apPaterno, apMaterno, yearModelo,
        modelo, colorMoto, numSerie, numPlacas, numPoliza, numInciso, polizaVencimiento,
        numFactura, fechaFactura, subtotalFactura, ivaFactura, totalFactura, aseguradora,
        estadoPoliza, observaciones } = req.body;

    const newData = {
        clvEmpleado, sucursal, nomEmpleado, apPaterno, apMaterno, yearModelo,
        modelo, colorMoto, numSerie, numPlacas, numPoliza, numInciso, polizaVencimiento,
        numFactura, fechaFactura, subtotalFactura, ivaFactura, totalFactura, aseguradora,
        estadoPoliza, observaciones
    };
    await pool.query('UPDATE relacionvehiculos set ?, status = 1 WHERE id = ?', [newData, id]);
    req.flash('success', 'Informacion editada correctamente');
    res.redirect('/data/relacionvehiculos');
});

/**Vista del apartado checklist */


/** Vista de la tabal CRUD de parque vehicular relacion de vheiculos y polizas de seguro */
router.get('/checklist', isLoggedIn, async (req, res) => {
    const getChecklist = await pool.query('SELECT * FROM checklist');
    res.render('data/checklist', {getChecklist});
});

router.get('/checklistcopi', isLoggedIn, async (req, res) => {
    const getChecklist = await pool.query('SELECT * FROM checklist');
    res.render('data/checklistcopi', {getChecklist});
});

/**Vista del apartado checklist */
router.get('/checklistcopi', (req, res) => {
    res.render('data/checklistcopi');
});

router.get('/deletecheklist/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM checklist WHERE ID = ?', [id]);
    req.flash('success', 'Informacion eliminada correctamente');
    res.redirect('/data/checklistcopi');
});


router.post('/checklistcopi', isLoggedIn, async (req, res) => {
    const { fecha, hora, nombreEmpleado, sucursal, realizocheck, luzStop,
        placas, espokers, cadena, escape, onPatada, manijas, asiento, tanqueGasolina, 
        espejos, odometro, faroTrasero, faroDelantero, direccionalTrasera, direccionalDelantera, 
        salpicaderaTrasera, salpicaderaDelantera, amortiguadorTrasero, amortiguadorDelantero, frenoTrasero, 
        frenoDelantero, llantaTrasera, llantaDelantera, rines, tarjetaCirculacionOriginal, tarjetaCirculacionCopia,
        licenciaCirculacionOriginal, licenciaCirculacionCopia, seguroOriginal, seguroCopiar, hologramaOriginal, hologramaCopia,
        otrosDoc, placasCaracteristicas, marcaCaracteristicas, modeloCaracteristicas, versionCaracteristicas,
        colorCaracteristicas, estadoAceiteBueno, estadoAceiteMalo, estadoAceiteCambio, estadoBujiasBueno, estadoBujiasMalo, estadoBujiasCambio,
        estadoBalatasDelBueno, estadoBalatasDelMalo, estadoBalatasDelCambio, estadoBalatasTraBueno, estadoBalatasTraMalo,
        estadoBalatasTraCambio, estadoFiltroAireBueno, estadoFiltroAireMalo, estadoFiltroAireCambio, estadoLlantasBueno, 
        estadoLlantasMalo, estadoLlantasCambio, kilometraje, proximoServ, observaciones } = req.body;

    const newChecklist = {
        fecha, hora, nombreEmpleado, sucursal, realizocheck, luzStop,
        placas, espokers, cadena, escape, onPatada, manijas, asiento, tanqueGasolina, 
        espejos, odometro, faroTrasero, faroDelantero, direccionalTrasera, direccionalDelantera, 
        salpicaderaTrasera, salpicaderaDelantera, amortiguadorTrasero, amortiguadorDelantero, frenoTrasero, 
        frenoDelantero, llantaTrasera, llantaDelantera, rines, tarjetaCirculacionOriginal, tarjetaCirculacionCopia,
        licenciaCirculacionOriginal, licenciaCirculacionCopia, seguroOriginal, seguroCopiar, hologramaOriginal, hologramaCopia,
        otrosDoc, placasCaracteristicas, marcaCaracteristicas, modeloCaracteristicas, versionCaracteristicas,
        colorCaracteristicas, estadoAceiteBueno,estadoAceiteMalo, estadoAceiteCambio, estadoBujiasBueno, estadoBujiasMalo, estadoBujiasCambio,
        estadoBalatasDelBueno, estadoBalatasDelMalo, estadoBalatasDelCambio, estadoBalatasTraBueno, estadoBalatasTraMalo,
        estadoBalatasTraCambio, estadoFiltroAireBueno, estadoFiltroAireMalo, estadoFiltroAireCambio, estadoLlantasBueno, 
        estadoLlantasMalo, estadoLlantasCambio, kilometraje, proximoServ, observaciones
    };
    await pool.query('INSERT INTO checklist set ?', [newChecklist]);
    req.flash('success', 'Informacion agregada correctamente');
    res.redirect('/data/checklistcopi');
});








/** Vista de la tabal CRUD de usuarios */
router.get('/usuarios', isLoggedIn, isAdmin, async (req, res) => {
    const getUsers = await pool.query('SELECT * FROM users');
    res.render('data/usuarios', { getUsers });
});


/**
 * Metodo eliminar usuarios 
*/
router.get('/deleteUser/:id', isLoggedIn, isAdmin, async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM users WHERE ID = ?', [id]);
    req.flash('success', 'Informacion eliminada correctamente');
    res.redirect('/data/usuarios');
});


// /**Vista para editar users  */ 
// router.get('/editUser/:id', isLoggedIn, async (req, res) => {
//     const { id } = req.params;
//     const editUser = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
//     res.render('data/editusuarios', { data: editUser[0] });
// });

// /**Metodo editar user */
// router.post('/editUser/:id', isLoggedIn, async (req, res) => {
//     const { id } = req.params;
//     const {  username, password, fullname, clvEmployee, sucursal } = req.body;

//     const newUser = {
//         username, password, fullname, clvEmployee, sucursal
//     };
//     await pool.query('UPDATE users set ? WHERE id = ?', [newUser, id]);
//     req.flash('success', 'Informacion editada correctamente');
//     res.redirect('/data/usuarios');
// });

// /**Vista del apartado checklist */
// router.get('/checklist', (req, res) => {
//     res.render('data/checklist');
// });


/**Vista del apartado checklist */
router.get('/error', (req, res) => {
    res.render('data/error');
});

module.exports = router