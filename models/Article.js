const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const postagemSchema = new Scheme({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    descripton: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        required: true
    },
    dateat: {
        type: Date,
        default: Date.now()
    }
});
//minha colecao no mongo db vai se chamar postagens
mongoose.model("articles", postagemSchema)
