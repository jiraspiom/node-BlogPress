const express = require("express")
const rotas = express.Router()
const controle = require("../controller/ArticlesController")

//admin
rotas.get("/artigos/new",  controle.new)
rotas.post("/artigos/save", controle.save)
rotas.get("/artigos/", controle.index)
rotas.post("/artigos/delete", controle.delete)
rotas.get("/artigos/edit/:id", controle.edit)
rotas.post("/artigos/delete", controle.delete)

module.exports = rotas