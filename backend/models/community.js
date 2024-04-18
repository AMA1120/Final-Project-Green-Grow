const pkg = require("mongoose");
const { Schema, model, models } = pkg;

const Community = new Schema({
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
    
}

);

const Question = models.Communities || model("Communities", Community);

module.exports = Question;