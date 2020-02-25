const express = require("express")
const rota = express.Router()
const rotaArtigo = require("../controller/ArticlesController")

rota.get("/artigo/new",  rotaArtigo.nova)
//rota.post("/categoria/edit/:id", rotacategoria.edit)
rota.get("/artigo/edit/:id", rotaArtigo.edit)


module.exports = rota