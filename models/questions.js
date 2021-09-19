const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const QandASchema = new Schema({
	question: {
		type: String,
		required: true,
	},
	answers: {
		type: [String],
		required: true,
	},
});

module.exports = mongoose.model("QandA", QandASchema);
