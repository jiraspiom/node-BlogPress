module.exports={
    create(req, res){
        res.render("user/create")
    },

    save(req, res){
        var email = req.body.email
        var senha = req.body.password
        //res.send("email aqi e senha")
        res.json({email, senha})
    },

    index(req,res){
        res.render("user/index")
    }
}