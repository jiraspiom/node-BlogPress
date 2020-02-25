const express = require("express")
const rota = express.Router()
const rotacategoria = require("../controller/CategoriesController")

rota.get("/categoria/new",  rotacategoria.nova)
//rota.post("/categoria/edit/:id", rotacategoria.edit)
rota.get("/categoria/edit/:id", rotacategoria.edit)


module.exports = rota