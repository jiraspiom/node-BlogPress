const express = require("express")
const rotas = express.Router()
const categoriaControle = require("../controller/CategoriesController")
const artigoControle = require("../controller/ArticlesController")
const usuarioControle = require("../controller/UsersController")

//home de usuario index principal
rotas.get("/", artigoControle.home)
rotas.get("/ler/:slug", artigoControle.artigo)

//lista todas as categorias para ver os artigos relacionado
rotas.get("/categorias", categoriaControle.categoria)
rotas.get("/artigos",artigoControle.artigopage)

rotas.get("/categorias/:categoria", artigoControle.artigosPorCategoria)

//paginacao
rotas.get("/artigos/pagina/:num", artigoControle.paginacao)

//login ->
rotas.get("/usuarios/new", usuarioControle.new)
rotas.get("/usuarios/",usuarioControle.index)

//<-login


module.exports = rotas