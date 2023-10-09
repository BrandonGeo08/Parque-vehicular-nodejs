/**Requiriendo las dependencias/modulos a utilizar */
const mysql = require('mysql2');
/**Modulo para soportar promesas */
const {promisify} = require('util')
const {database} = require('./keys');

/**Metodo de conexion createPool */
const pool = mysql.createPool(database);

/**Utilizando metodo getConnection para obtener una conexion o un error*/
pool.getConnection((err, connection) => {
    if(err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();
    console.log('DB is Connected');
});

/**Metodo para poder utilizar promesas en las consultas  */
pool.query = promisify(pool.query);

module.exports=pool;