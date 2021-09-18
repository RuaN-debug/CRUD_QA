const QandA = require("../../models/questions");

module.exports = {
	getAllQandA: async (args) => {
		return QandA.find({});
	},
	getQandA: async (args) => {
		return QandA.findById(args._id);
	},
	addQandA: async (args) => {
		const newQandA = new QandA({
			question: args.question,
			answers: args.answers,
		});
		try {
			return newQandA.save();
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	updateQandA: (args) => {
		if (!args._id) return;
        else
            return QandA.findByIdAndUpdate(
                args._id,
                {
                    $set: {
                        question: args.question,
                        answers: args.answers,
                    },
                },
                { new: true }
            );
	},
    deleteQandA: (args) => {
		if (!args._id) return;
        else return QandA.findByIdAndDelete(args._id);
    }
};
