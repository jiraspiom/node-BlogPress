const express = require("express")
const rotas = express.Router()
const controle = require("../controller/ArticlesController")

rotas.get("/artigos/new",  controle.new)

module.exports = rotas