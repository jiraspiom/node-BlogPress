const express = require("express")
const rotas = express.Router()
const controle = require("../controller/ArticlesController")
const admimintradoAuth = require("../middleware/usuarioath")

//admin
rotas.get("/artigos/new", admimintradoAuth, controle.new)
rotas.post("/artigos/save", controle.save)
rotas.get("/artigos/", controle.index)
rotas.post("/artigos/delete", controle.delete)
rotas.get("/artigos/edit/:id", controle.edit)
rotas.post("/artigos/update", controle.update)

module.exports = rotas