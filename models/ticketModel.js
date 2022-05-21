//schemal all the fields we want for user

const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		product: {
			type: String,
			required: [true, "Please select a product"],
			enum: [
				"safety depost box",
				"Deposit",
				"Withdrawal",
				"Balance",
				"Savings Account",
			],
		},
		description: {
			type: Number,
			required: [true, "Please enter an amount"],
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

module.exports = mongoose.model("Ticket", ticketSchema);
