const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const table_user = new mongoose.Schema({
    nomeusuario:{type:String, unique:true},
    nomecompleto:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    senha:{type:String, required:true},
    telefone:String,
    datacadastro:{type:Date, default:Date.now},
})

table_user.pre('save', function(next){
    let user = this
    if(!user.isModified('senha')) return next()

    bcrypt.hash(user.senha, 10, (erro, hashpass)=>{
        user.senha = hashpass
        return next()
    })
})

module.exports = mongoose.model("user", table_user)
