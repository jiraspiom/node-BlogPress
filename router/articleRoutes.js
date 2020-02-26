const express = require("express")
const rota = express.Router()
const controle = require("../controller/ArticlesController")

rota.get("/artigos/novo",  controle.nova)
//rota.post("/categoria/edit/:id", rotacategoria.edit)
rota.get("/artigos/edit/:id", controle.edit)


module.exports = rota