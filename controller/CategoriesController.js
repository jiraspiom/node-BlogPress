const express = require("express")
const rota = express.Router()

rota.get("/categories", (req, res) =>{
    res.send("rota de categoria")
})

rota.get("/admin/categories/new", (req, res)=>{
    res.render("admin/category/new")
})

module.exports = rota;