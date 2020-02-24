const express = require("express")
const router = express.Router()

router.get("/articles", (req, res)=>{
    res.send("Rota de Artigo")
})

router.get("/admin/articles", (req, res)=>{
    res.send("rota de adminstracao de artigos")
})

module.exports = router