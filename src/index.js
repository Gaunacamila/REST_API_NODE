const express = require('express');
const app = express();
const morgan = require('morgan')

// setting
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

// middlewares -- trae datos del servidor-- los cuales son los datos que van a soportar recibir
app.use(morgan('dev'));
//Entender datos que llegam del formulario , en este caso son textos 
app.use(express.urlencoded({extended:false 
}))
//Recibe datos json 
app.use(express.json());

//Routes 
app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies'));


//starting the server 
app.listen (app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
});