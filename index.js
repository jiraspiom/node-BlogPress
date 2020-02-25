'use strict';
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const conection = require("./database/database")
const categoriesController = require("./controller/CategoriesController")
const articlesController = require("./controller/ArticlesController")

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
app.get("/", (req, res)=>{
    res.render("index")
})

app.use("/", categoriesController)
app.use("/", articlesController)

//se rodar em producao pegar a porta aleatoria senao pega a porta 3001 definda
const PORTA = process.env.PORT || 3001
app.listen(PORTA, function(){
    console.log("O servidor esta rodando...")
})