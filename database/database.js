const mongoose = require('mongoose')

//mongoose
mongoose.Promise = global.Promise;
const connection = new mongoose.connect("mongodb://localhost:27017/BlogPress", { useNewUrlParser: true }).then(() => {
    console.log("Conectado ao mongo db")
}).catch((err) => {
    console.log("Erro ao conectar ao mongo db - erro: " + err)
})

module.exports = connection