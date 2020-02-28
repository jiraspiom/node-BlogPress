const express = require("express")
const rotas = express.Router()
const controlecategoria = require("../controller/CategoriesController")

//admin
rotas.get("/categorias/new",  controlecategoria.new)
rotas.post("/categorias/save", controlecategoria.save)
rotas.get("/categorias", controlecategoria.index)
rotas.post("/categorias/delete", controlecategoria.delete)
rotas.get("/categorias/edit/:id", controlecategoria.edit)
rotas.post("/categorias/update", controlecategoria.update)

module.exports = rotas