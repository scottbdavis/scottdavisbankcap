//schemal all the fields we want for user

//schemal all the fields we want for user

const mongoose = require("mongoose");

const withdrawSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},

		amount: {
			type: Number,
			required: [true, "Please enter an amount"],
		},
		balance: {
			type: Number,
		},

		status: {
			type: String,
			required: true,
			enum: ["in progress", "success", "closed", "new"],
			default: "new",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Withdraw", withdrawSchema);
