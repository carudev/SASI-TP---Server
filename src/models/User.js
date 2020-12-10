const mongoose = require ('mongoose');


const UserSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
    email:String,
    card: Number,
    cardPassword: Number,
    password: Number,
    passwordConfirm: Number
});

module.exports = mongoose.model('User', UserSchema);