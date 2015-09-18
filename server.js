require('node-jsx').install({harmony: true});
var express = require('express');
var reactEngine = require('react-engine');

var app = express();

// directorios que usaremos para las vistas
app.set('views', __dirname + '/src/views');
//directorio que usaremos para los archivos estaticos como images, css, etc
app.use(express.static(__dirname + '/public'));


var engine = reactEngine.server.create();

// que extensión en los archivos de vistar usaremos
app.engine('.jsx', engine);

// registrar el template engine
app.set('view engine', 'jsx');

// registremos una vista personalizada
app.set('view', reactEngine.expressView);


app.get('/', function(req, res) {
    res.render('home',{
        title: 'Mi primera isomorphic app',
    })
});

app.listen(3000, function(){
    console.log('El servidor de node está corriendo en el puerto 3000');
});