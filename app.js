// Require de Express
const express = require('express');

// Ejecución de Express
const app = express();

let rutaHeroes = require('./routes/heroes');
const rutaMain = require('./routes/main');

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));


app.use('/', rutaMain);
app.use('/heroes',rutaHeroes);
app.use('/heroes/detalle/:id', rutaHeroes);
app.use('/heroes/:id/bio/:ok?', rutaHeroes);
app.use('/creditos',rutaMain);


//esto atiende al pedido cuando no es ni main ni heroes
app.use('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});






























































