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

                new Usuario(novo).save().then(() => {
                    res.send("usuario cadastrado com sucesso ")
                }).catch((erro) => {
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

        Usuario.find().then((usuarios) => {
            res.render("user/index", { usuarios: usuarios })
            //res.json(usuarios)
        }).catch((erro) => {
            res.send("nenhum usuario encontrado")
        })

    },

    wplogin(req, res) {
        res.render("user/login")
    },

    login(req, res) {
        var email = req.body.email
        var senha = req.body.password

        Usuario.findOne({ email: email }).then((usuario) => {
            if (usuario != undefined) {
                var correto = bcrypt.compareSync(senha, usuario.password)

                if (correto) {
                    req.session.usuario = {
                        id: usuario.id,
                        email: usuario.email
                    }
                    res.json(req.session.usuario)
                } else {
                    res.send("senha invalida")
                }
            } else {
                res.send("usuario nao encontrado")
            }
        }).catch((erro) => {
            res.send("erro ao buscar usuario por email - " + erro)
        })


    },

    logout(req, res) {
        req.session.usuario = undefined
        res.redirect("/")
    }

}
