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
            res.redirect("/")
        )
    } else {
        res.redirect("admin/categorias/new")
    }

}
exports.edit = (req, res) => {
    res.render("admin/category/edit")
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