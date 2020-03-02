const mongoose = require("mongoose")
require("../models/User")
const Usuario = mongoose.model("users")
const bcrypt = require("bcrypt")

module.exports = {
    create(req, res) {
        res.render("user/create")
    },

    save(req, res) {
        var email = req.body.email
        var password = req.body.password

        Usuario.findOne({ email: email }).then((usuario) => {
            if (usuario == undefined) {

                var sal = bcrypt.genSaltSync(10)
                var hash = bcrypt.hashSync(password, sal)

                var novo = {
                    email: email,
                    password: hash
                }
   
                new Usuario(novo).save().then(()=>{
                    res.send("usuario cadastrado com sucesso ")
                }).catch((erro)=>{
                    res.send("erro ao gravar o novo usuario")
                })

            } else {
                res.send("Usuario ja cadastrado")
            }
        }).catch((error) => {
            res.send("erro ao bucar o usuario" + error)
        })   
    },

    index(req, res) {

        Usuario.find().then((usuarios)=>{
            res.render("user/index", {usuarios: usuarios})
            //res.json(usuarios)
        }).catch((erro)=>{
            res.send("nenhum usuario encontrado")
        })

    }
}
