/**Requiriendo las dependencias/modulos a utilizar */
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const flash = require('connect-flash');
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)
const passport = require('passport');
const Swal = require('sweetalert2')

const { database } = require('./keys');

/**Inicializamos express y lo 
  guardamos en una constante llamada app*/
const app = express();
require('./lib/passport')

/** Settings
 * configuraciones para le servidor express
 */
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
/**
 * Configuraciones del motor de plantillas handlebars
 * @defaulLayaut es la plantilla principal que cuenta con el head, los link css, los scripts
 * @layoutsDir con el modulo path.join que nos ayuda a unir directorios traemos la direccion de la carpeta views concatenando la carpeta layouts
 * @partialsDir unimos otro directorio, en la carpeta partials para poder utilizar un codigo en varias vistas en este caso la navegacion de la app (navbar, sidebar)
 * @extname configura el la terminacion de nuestros archivos handlebars 
 * @helpers definir donde se encuetran algunas funciones 
 */
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/helpers')
  }))
app.set('view engine', '.hbs');


/** 
 * Middlewares
 * funciones ejecutables cada que se realice una petición 
 */
app.use(session({
    secret: 'datasession',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extends: false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

/**
 * Global Variables 
 * Variables que toda la app necesita
 */
app.use((req, res, next)=>{
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user =  req.user;
    next();
})

/**
 * Routes
 * URL del servidor a donde direccionara al cliente 
 */
app.use(require('./routes/index'));
app.use(require('./routes/authentication'))
app.use('/data', require('./routes/links'));


/**
 * Public
 * El navegador puede acceder a todo el codigo que contenga public (archivos css,js,img etc)
 */
app.use(express.static(path.join(__dirname, 'public')));


/**
 * Starting the server
 * Inicializa el server tomando el puerto definido
 */
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});