const pkg = require("mongoose");
const { Schema, model, models } = pkg;

const Article = new Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    content: {
        type: String,
        required: [true, "Please provide content"],
    },
    image: {
        type: String,
        required: [true, "Please provide an image"],
    },
    category: {
        type: String,
        required: [true, "Please provide a category"],
    },
}

);

const Articles = models.Articles || model("Articles", Article);

module.exports = Articles;