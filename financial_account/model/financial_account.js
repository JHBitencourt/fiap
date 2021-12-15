const mongoose = require('mongoose')

const table_financial = new mongoose.Schema({
    nome_usuario:{type:String, required:true},
    nome_banco:{type:String, required:true},
    tipo_conta:{
        type:String, 
        enum : {
            values: ['CORRENTE','POUPANCA', 'SALARIO'],
            message: '{VALUE} não suportado',
            default: 'CORRENTE'
        },
        required: true
    },
    nome_titular:{type:String, required:true},
    limite_cartao:{type:Number, required:true},
})

table_financial.index({nome_usuario: 1, tipo_conta: 1}, {unique:true})

module.exports = mongoose.model("account", table_financial)
