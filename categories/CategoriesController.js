const express = require("express")
const rota = express.Router()

rota.get("/categories", (req, res) =>{
    res.send("rota de categoria")
})

rota.get("/admin/categories", (req, res)=>{
    res.send("rota de administracao")
})

module.exports = rota;