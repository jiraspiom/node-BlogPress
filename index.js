'use strict';
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const conection = require("./database/database")

//referenciado as rotas
const categoriaRota = require("./router/categoryRoutes")
const artigoRota = require("./router/articleRoutes")

//carregar a view engina
app.set('view engine', 'ejs') 

//statico
app.use(express.static('public'))

//bodyparse para trabalhar com html e json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//database
conection

//roda de teste
app.use("/", artigoRota)

app.use("/dados", (req, res )=> {res.render("dados")})

app.use("/admin", categoriaRota)
app.use("/admin", artigoRota)


//se rodar em producao pegar a porta aleatoria senao pega a porta 3001 definda
const PORTA = process.env.PORT || 3001
app.listen(PORTA, function(){
    console.log("O servidor esta rodando...")
})