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
rotas.get("/admin/usuarios/create", usuarioControle.create)
rotas.post("/admin/usuarios/create", usuarioControle.save)
rotas.get("/admin/usuarios/",usuarioControle.index)
rotas.get("/admin/usuarios/login", usuarioControle.wplogin)
rotas.post("/admin/usuarios/login", usuarioControle.login)
rotas.get("/admin/usuarios/logout", usuarioControle.logout)

//<-login


module.exports = rotas