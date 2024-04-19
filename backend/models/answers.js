const pkg = require("mongoose");
const { Schema, model, models } = pkg;

const CommunityAnswers = new Schema({
    answer : {
        type: String,
        required: [true, "Please provide an answer"],
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: "Community",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});
    

const Answers = models.Answers || model("Answer", CommunityAnswers);

module.exports = Answers;
