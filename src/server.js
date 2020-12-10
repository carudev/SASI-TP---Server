const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');


const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://aulasasi:SaSi123@projetosasi.whb1i.mongodb.net/databasesasi?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

app.use(cors()); //definir depois por segurança quem pode acessar a api {origin:'http://localhost:3333'}

app.use(express.json());
app.use(routes);

app.listen(3333);