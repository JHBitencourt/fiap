const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const auth = require("./ middleware/auth")
const Account = require("./model/financial_account")

const app = express()

app.use(express.json())
app.use(cors())

const urldb = "mongodb+srv://admin:admin-teste@users.3nybg.mongodb.net/database?retryWrites=true&w=majority"

mongoose.connect(urldb, {useNewUrlParser:true, useUnifiedTopology:true})

app.post("/account", auth, (req, res) => {
    const account = new Account(req.body)

    Account.findOne({nome_usuario:account.nome_usuario, tipo_conta:account.tipo_conta},(error, data)=>{
        if(error) return res.status(400).send({output:`Error searching an account -> ${error}`})
        if(data) return res.status(400).send({output:`Already exists an account for user ${data.nome_usuario} and type ${data.tipo_conta}`})

        account.save().then((newAccount)=>{
            res.status(201).send({output:`New account created for user ${account.nome_usuario}`, payload:newAccount})
        }).catch((error)=>res.status(400).send({output:`Error while trying to create an account -> ${error}`}))    
    })
})

app.put("/account/:id", auth, (req, res) => {
    Account.findByIdAndUpdate(req.params.id, req.body, (error, data)=>{
        if(error) return res.status(400).send({output:`Error searching an account -> ${error}`})
        if(!data) return res.status(404).send({output:`Account with id ${req.params.id} not found`})

        res.status(201).send({output:`Account updated for user ${data.nome_usuario}`})
    })
})

app.use((req, res) => {
    res.type("application/json")
    res.status(404).send({output:"Endpoint not found"})
})

app.listen(3001, () => "Server online at :3001")