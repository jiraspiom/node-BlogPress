const mongoose = require("mongoose")
require("../models/User")
const Usuario = mongoose.model("users")
const bcrypt = require("bcrypt")

module.exports={
    create(req, res){
        res.render("user/create")
    },

    save(req, res){
        var email = req.body.email
        var senha = req.body.password
        
        var sal = bcrypt.genSaltSync(10)
        var hash = bcrypt.hashSync(senha, sal)

        res.json({email, senha, hash})
    },

    index(req,res){
        res.render("user/index")
    }
}