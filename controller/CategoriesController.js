const mongoose = require("mongoose")
require("../models/Category")
const Categoria = mongoose.model("categories")
const slugifly = require("slugify")

exports.new = (req, res) => {
    res.render("admin/category/new")
}

exports.save = (req, res) => {
    if (req.body.title != undefined) {
        const novaCategoria = {
            title: req.body.title,
            slug: slugifly(req.body.title)
        }

        new Categoria(novaCategoria).save().then(
            res.redirect("/admin/categorias")
        )
    } else {
        res.redirect("/admin/categorias/new")
    }
}

exports.index = (req, res) => {
    Categoria.find().then((categorias) => {
        res.render("admin/category/index", { categorias: categorias })
    }).catch()
}

exports.delete = (req, res) => {
    var id = req.body.id
    if (id != undefined) {
        Categoria.remove({ _id: id }).then(() => {
            res.redirect("/admin/categorias")
        }).catch()
    } else { //null
        res.redirect("/admin/categorias")
    }
}

exports.edit = (req, res) => {
    var id = req.params.id
    Categoria.findOne({ _id: id }).then((categoria) => {
        if (categoria != undefined) {
            res.render("admin/category/edit", { categoria: categoria })
        } else {
            res.redirect("/admin/categorias")
        }
    }).catch((error) => {
        res.redirect("/admin/categorias")
    })

}