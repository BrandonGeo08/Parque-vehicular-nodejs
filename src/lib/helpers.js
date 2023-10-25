/** */
const {format, register}  = require('timeago.js');
const bcreypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async (password) =>{
    const salt = await bcreypt.genSalt(10);
    const hash = await bcreypt.hash(password, salt);
    return hash;
};

helpers.matchPassword = async (password, savedPassword) =>{
    try {
        return await bcreypt.compare(password, savedPassword);
    } catch (error) {
        console.log(error);
    }
}


/**Metodo de timeago que toma un formato timestamp 
 * y lo convierte para mostrar cuanto tiempo paso despues de la acción realizada */
helpers.timeago= (timestamp)=>{
    register('es_ES', (number, index, total_sec) => [
        ['Justo ahora', 'Ahora mismo'],
        ['Hace %s segundos', 'En %s segundos'],
        ['Hace 1 minuto', 'En 1 minuto'],
        ['Hace %s minutos', 'En %s minutos'],
        ['Hace 1 hora', 'En 1 hora'],
        ['Hace %s horas', 'En %s horas'],
        ['Hace 1 dia', 'En 1 dia'],
        ['Hace %s dias', 'En %s dias'],
        ['Hace 1 semana', 'En 1 semana'],
        ['Hace %s semanas', 'En %s semanas'],
        ['1 mes', 'En 1 mes'],
        ['Hace %s meses', 'En %s meses'],
        ['Hace 1 año', 'En 1 año'],
        ['Hace %s años', 'En %s años']
    ][index]);
    return format(timestamp, 'es_ES');
}


module.exports = helpers;