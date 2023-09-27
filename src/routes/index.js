const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Hola')
})

const pool = require('../database')

module.exports = router