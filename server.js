const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

const puerto = process.env.PORT || 3000;

//se invoca una pagina por defecto con esta linea de coigo
app.use(express.static(__dirname + '/public'));
//Express hbs  engine 
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Bairon Reyes',
        /* anio: new Date().getFullYear() */
    });
});
app.get('/about', function(req, res) {
    res.render('about', {
        /* anio: new Date().getFullYear() */
    });
});

app.listen(puerto, () => {
    console.log(`Escuchando Peticiones en el puerto ${puerto} .........`);
});