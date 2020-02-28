const express = require("express")
const rotas = express.Router()
const categoriaControle = require("../controller/CategoriesController")
const artigoControle = require("../controller/ArticlesController")

//home de usuario index principal
rotas.get("/", artigoControle.home)
rotas.get("/ler/:slug", artigoControle.artigo)

//lista todas as categorias para ver os artigos relacionado
rotas.get("/categorias", categoriaControle.categoria)

rotas.get("/categorias/:categoria", artigoControle.artigosPorCategoria)

module.exports = rotas