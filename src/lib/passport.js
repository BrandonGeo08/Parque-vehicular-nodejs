/**Con passport puedo crear autentificaciones de sesiones */
const passport = require('passport');
const pool = require('../database');
const LocalStrategy = require('passport-local').Strategy;
const helpers = require('./helpers');


/**  */
passport.use('local.signin', new LocalStrategy({
    usernameField: 'clvEmployee',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, clvEmployee, password, done) =>{
    console.log(req.body);
    const rows = await pool.query('SELECT * FROM users WHERE clvEmployee = ?', [clvEmployee]);
    if(rows.length > 0){
        const user = rows[0];
        const validPassword = await helpers.matchPassword(password, user.password);
        if(validPassword){
            done(null, user, req.flash('success', 'Bienvenido' + user.clvEmployee));
        }else{
            done(null, false, req.flash('message', 'Contrsaeña incorrecta'))
        }
    }else{
        return done(null, false, req.flash('message', 'El usuario no existe'))
    }
}));


/**Utilizando passport para recibir los datos desde los campos del formulario 
 * seteamos el ReqToCallback en true para recibir el objeto req dentro de la funcion que ejecuta LocalStrategy
 * el callback recibe req, clvEmployee, password y con done puede continuar cualquier otro proceso
 * 
*/
passport.use('local.signup', new LocalStrategy({
    usernameField: 'clvEmployee',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, clvEmployee, password, done)=>{
    const {fullname} = req.body
    const {sucursal} = req.body
    const {isAdmin} = req.body
    const newUser = {
        clvEmployee,
        password,
        isAdmin,
        fullname,
        sucursal
    }
    newUser.password= await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    newUser.id = result.insertId;
    return done(null, newUser);
    
}));


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser( async (id, done) =>{
    const rows = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    done(null, rows[0]);
})

