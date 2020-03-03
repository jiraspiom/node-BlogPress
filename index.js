'use strict';
const express = require("express")
const app = express()
const session = require("express-session")
const bodyParser = require("body-parser")
const conection = require("./database/database")

//referenciado as rotas
const categoriaRota = require("./router/categoryRoutes")
const artigoRota = require("./router/articleRoutes")
const rotaUsuario = require("./router/usuario")

//carregar a view engina
app.set('view engine', 'ejs') 

//vou adicionar 30000= 30 segundo para testar a sessao
app.use(session({
    secret: "qualquercoisaabobrinha",
    cookie: {maxAge: 30000}
}))

//statico
app.use(express.static('public'))

//bodyparse para trabalhar com html e json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//database
conection

//rodas de usuario
app.use("/", rotaUsuario)

app.get("/sessao", (req, res)=>{
    req.session.pai = "gilmar"
    req.session.filho = "alef"
    req.session.videogame = {
        nome: "xbox",
         quantidade: 3}
    res.send("sessao criada"
    )
})

app.get("/sessaoler", (req, res)=>{
    res.json({
       pai: req.session.pai,
        filho: req.session.filho,
        video: req.session.videogame
    })
})

//rotas de adminstracao
app.use("/admin", categoriaRota)
app.use("/admin", artigoRota)

//apagar depois
app.use("/dados", (req, res )=> {res.render("dados")})

//se rodar em producao pegar a porta aleatoria senao pega a porta 3001 definda
const PORTA = process.env.PORT || 3001
app.listen(PORTA, function(){
    console.log("O servidor esta rodando...")
})