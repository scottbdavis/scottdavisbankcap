const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Deposit = require("../models/depositModel");

//@desc get user deposits
//@route GET /api/deposits
//@access  Private
const getDeposits = asyncHandler(async (req, res) => {
	//get user using the id in the JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("User not found");
	}
	const deposits = await Deposit.find({ user: req.user.id });

	res.status(200).json(deposits);
});

//@desc create deposit
//@route POST /api/deposits
//@access  Private
const makeDeposit = asyncHandler(async (req, res) => {
	const { amount, status, balance } = req.body;

	if (!amount) {
		res.status(400);
		throw new Error("Please add an amount");
	}

	//get user using the id in the JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("User not found");
	}

	// you should update balance
	user.balance += parseInt(amount);
	user.save();

	const deposit = await Deposit.create({
		user: req.user.id,
		amount,
		balance: req.user.balance,
		// balance,
		status: "new",
	});
	res.status(201).json(deposit);
});

//@desc delete deposit
//@route DELETE /api/deposits/:id
//@access  Private
const deleteDeposit = asyncHandler(async (req, res) => {
	//get ticket using the id in the JWT
	const deposit = await Deposit.findById(req.params.id);

	if (!deposit) {
		res.status(404);
		throw new Error("Deposit not found");
	}

	if (deposit.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("Not authorized");
	}

	await deposit.remove();

	res.status(200).json({ success: true });
});

//@desc Update deposit
//@route PUT /api/deposits/:id
//@access  Private
const updateDeposit = asyncHandler(async (req, res) => {
	//get ticket using the id in the JWT
	const deposit = await Deposit.findById(req.params.id);

	if (!deposit) {
		res.status(404);
		throw new Error("Deposit not found");
	}

	if (deposit.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("Not authorized");
	}

	const updatedDeposit = await Deposit.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);

	res.status(200).json(updatedDeposit);
});

module.exports = {
	getDeposits,
	makeDeposit,
	deleteDeposit,
	updateDeposit,
};
