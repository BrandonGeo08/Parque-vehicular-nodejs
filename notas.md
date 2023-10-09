express: framework de nodejs para creacion de backend 
express-handlebars | Ejs: motores de plantillas 
express-session: administra las sessiones de nuestra app
mysql: modulo para conectar y consultas a base de datos 
express-mysql-session: almacena las sessiones 
morgan: permite crear logs o mensajes de lo que la app pide al servidor 
bcryptjs: cifra las contraseñas de usuarios antes de guardarlas
passport: modulo para autenticar y manejar el proceso de login 
passport-local: autenticar usuarios con nuestra db
timeago.js: convierte los timestamps o fechas en formato de: 2 minutes ago, 2 hours ago
connect-flash: muestra mensajes de error y exito cuando usuario realice operación 
express-validator: valida los datos que el usuario nos envia desde el cliente 
nodemon: herramienta para dev reinicia el servidor automaticamente al guardar el proyecto 


Inicia el proyecto con : npm run dev 


Carpetas: 

Principal: los package.json contienen el nombre del proyecto, la version, el archivo main, todas las dependencias instaladas, todo los modulos de las dependencias por parte de npm 

Principal-database: Contiene archivos .sql con las queries para crear la base de datos y las tablas que utiliza el proyecto 

Principal-node_modules: Carpeta que contiene todos los modulos de nodejs

Principal-src:  Carpeta principal que contiene todo el poryecto, 
                --Archivo database.js contiene principalmente la coneccion a la base de datos
                --Archivo index.js es el archivo principal del proyecto el cual arranca el proyecto
                --Archivo keys.js almacena palabras calves para utilizar servicios


Principal-src-routes: Carpeta que contiene los archivos con las rutas en las cuales navegara la app
