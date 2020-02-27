const express = require("express")
const rotas = express.Router()
const controle = require("../controller/ArticlesController")

rotas.get("/artigos/new",  controle.new)
rotas.post("/artigos/save", controle.save)
rotas.get("/artigos/", controle.index)

module.exports = rotas