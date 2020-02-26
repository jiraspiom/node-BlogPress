const express = require("express")
const rotas = express.Router()
const controlecategoria = require("../controller/CategoriesController")

rotas.get("/categorias/new",  controlecategoria.new)
//rota.post("/categoria/edit/:id", rotacategoria.edit)
rotas.post("/categorias/save", controlecategoria.save)
rotas.get("/categorias", controlecategoria.index)

rotas.get("/categorias/edit/:id", controlecategoria.edit)



module.exports = rotas