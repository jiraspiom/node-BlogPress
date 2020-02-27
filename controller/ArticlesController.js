const mongoose = require("mongoose")
require("../models/Category")
const Categoria = mongoose.model("categories")


//abrir o formulario novo
exports.new = (req, res) =>{
    Categoria.find().then((categorias)=>{
        res.render("admin/article/new", {categorias: categorias})

    }).catch((erro)=>{
        res.send("Erro ao carregar as categorias")
    })
}
