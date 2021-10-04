const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
	addUser: async (args) => {
		try {
			const userFind = await User.findOne({ email: args.email });
			if (userFind){
				console.log("User already exists");
				throw new Error("User already exists");
			}

			const hashedPassword = await bcrypt.hash(args.password, 12);
			const user = new User({
				email: args.email,
				password: hashedPassword,
			});

			const result = await user.save();
			return { ...result._doc, password: null, _id: result._id };
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
	login: async (args) => {
		const user = await User.findOne({ email: args.email });
		if (!user){
			console.log("User does not exist");
			throw new Error("User does not exist");
		}

		const isEqual = await bcrypt.compare(args.password, user.password);
		if (!isEqual){
			console.log("Password incorrect");
			throw new Error("Password incorrect");
		}

		const token = jwt.sign(
			{ userId: user._id, email: user.email }, 
			"somesupersecretkey", 
			{expiresIn: "1h"},
		);
		return { userId: user._id, token: token, tokenExpiration: 1 };
	},
};
