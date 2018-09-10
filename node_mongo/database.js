require ('dotenv').config();
const mongoose = require('mongoose');
const mongo_uri = process.env.DEV_DB;

mongoose.Promise = global.Promise;

mongoose.connect(mongo_uri).then( () => {
    console.log("Conectado a MongoDB... !!!")
},
    err => {
        console.log("Error en conexion... !!!");
        console.log(err.stack);
    }
)
