const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const User = require("./model/user")
const ManagerUser = require("./model/manage-user")
const create_token = require("./utils/token")

const app = express()

app.use(express.json())
app.use(cors())

const urldb = "[Add mongodb connection URL]"

mongoose.connect(urldb, {useNewUrlParser:true, useUnifiedTopology:true})

app.post("/user", (req, res) => {
    const data = new User(req.body)
    data.save().then((newUser)=>{
        res.status(201).send({output:"New user created", payload:newUser})
    }).catch((error)=>res.status(400).send({output:`Error while trying to register -> ${error}`}))    
})

app.put("/user/password", (req, res) => {
    const username = req.body.nomeusuario
    const newPass = req.body.senha

    User.findOne({nomeusuario:username},(error, data)=>{
        if(error) return res.status(400).send({output:`Error finding the user -> ${error}`})
        if(!data) return res.status(404).send({output:`User not found`})

        bcrypt.compare(newPass, data.senha, (error, equals)=> {
            if(error) return res.status(500).send({output:`Error validating the password -> ${error}`})
            if(equals) return res.status(400).send({output:`Password already used`})

            data.senha = newPass
            data.save()

            res.status(200).send({output:"Password updated", payload:data})
        })
    })  
})

app.post("/auth", (req, res) => {
    const username = req.body.nomeusuario
    const pass = req.body.senha

    User.findOne({nomeusuario:username},(error, data)=>{
        if(error) return res.status(400).send({output:`Error finding the user -> ${error}`})
        if(!data) return res.status(404).send({output:`User not found`})

        bcrypt.compare(pass, data.senha, (error, equals)=> {
            if(error) return res.status(500).send({output:`Error validating the password -> ${error}`})
            if(!equals) return res.status(400).send({output:`Invalid password`})

            const token = create_token(data._id, data.nomeusuario)
            
            const info = new ManagerUser({id:data._id, nomeusuario: data.nomeusuario, information:req.headers})
            info.save()
            res.status(200).send({output:"Authenticated", payload:data, token:token})
        })
    })
})

app.use((req, res) => {
    res.type("application/json")
    res.status(404).send({output:"Endpoint not found"})
})

app.listen(3000, () => "Server online at :3000")