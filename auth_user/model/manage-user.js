const mongoose = require('mongoose')

const table_manager_user = mongoose.Schema({
    id:{type:String, required:true},
    nomeusuario:{type:String},
    informacao:[{}],
    datalogin:{type:Date, default:Date.now}
})

module.exports = mongoose.model("manager_user", table_manager_user)