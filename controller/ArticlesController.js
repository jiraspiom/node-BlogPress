const mongoose = require("mongoose")
require("../models/Category")
const Categoria = mongoose.model("categories")
require("../models/Article")
const Artigo = mongoose.model("articles")

const slugifly = require("slugify")

exports.home = (req, res) =>{
    Artigo.find().sort({dateat: "desc"}).then((artigos)=>{
        res.render("index", {artigos: artigos})
      }).catch((erro)=>{
        res.send("erro ao buscar os artigos - " + erro)
    })
}

//abrir o formulario novo
exports.new = (req, res) =>{
    Categoria.find().then((categorias)=>{
        res.render("admin/article/new", {categorias: categorias})

    }).catch((erro)=>{
        res.send("Erro ao carregar as categorias")
    })
}

exports.save = (req, res) =>{
    //pegando os name do formulario para salvar o artigo
    var titulo = req.body.title
    var corpo = req.body.body
    var categoria = req.body.category
    var descricao = req.body.title

    const novoArtigo = {
        title: titulo,
        body: corpo,
        slug: slugifly(titulo),
        descripton: descricao,
        category: categoria,
    }

    new Artigo(novoArtigo).save().then(()=>{
        res.redirect("/admin/artigos")
    }).catch((erro) =>{
        res.send("erro ao salvar " + erro)
    })
}

exports.index = (req, res) =>{
    Artigo.find().populate("category").sort({ dateat: "desc" }).then((artigos)=>{
        res.render("admin/article/index", {artigos: artigos})
    })
}

exports.delete = (req, res) => {
    var id = req.body.id
    if (id != undefined) {
        Artigo.remove({ _id: id }).then(() => {
            res.redirect("/admin/artigos")
        }).catch()
    } else { //null
        res.send("erro ao deletar")
      //  res.redirect("/admin/artigos")
    }
}
