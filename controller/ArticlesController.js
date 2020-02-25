const express = require("express")
const router = express.Router()

router.get("/articles", (req, res)=>{
    res.send("Rota de Artigo")
})

router.get("/admin/articles/new", (req, res)=>{
    res.render("admin/article/new")
})

module.exports = router