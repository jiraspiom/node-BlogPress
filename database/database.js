const mongoose = require('mongoose')

//mongoose
mongoose.Promise = global.Promise;
//const connection = new mongoose.connect("mongodb://localhost:27017/BlogPress", { useNewUrlParser: true }).then(() => {
const connection = new mongoose.connect("mongodb+srv://testebanco:kyfjoz-syRzoj-kitvu9@cluster0-jzfpn.gcp.mongodb.net/blogPress?retryWrites=true&w=majority", { useNewUrlParser: true }).then(() => {
    console.log("Conectado ao MongoDB :D")
}).catch((erro) => {
    console.log("Erro ao conectar MongoDB - DESCRICAO DO ERRO: " + erro)
})

module.exports = connection

//mongodb+srv://testebanco:kyfjoz-syRzoj-kitvu9@cluster0-jzfpn.gcp.mongodb.net/test?retryWrites=true&w=majority
