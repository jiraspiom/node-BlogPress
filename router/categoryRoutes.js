const express = require("express")
const rota = express.Router()
const controlecategoria = require("../controller/CategoriesController")

rota.get("/categorias/new",  controlecategoria.new)
//rota.post("/categoria/edit/:id", rotacategoria.edit)
rota.get("/categorias/edit/:id", controlecategoria.edit)

rota.post("/categorias/save", controlecategoria.save)


module.exports = rota