const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Withdraw = require("../models/withdrawModel");

//@desc get user withdrawals
//@route GET /api/withdrawals
//@access  Private
const getWithdrawals = asyncHandler(async (req, res) => {
	//get user using the id in the JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("User not found");
	}
	const withdrawals = await Withdraw.find({ user: req.user.id });

	res.status(200).json(withdrawals);
});

//@desc make withdrawal
//@route POST /api/withdrawals
//@access  Private
const makeWithdraw = asyncHandler(async (req, res) => {
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
	user.balance -= amount;
	user.save();

	const withdrawal = await Withdraw.create({
		user: req.user.id,
		amount,
		balance: req.user.balance,
		// balance,
		status: "new",
	});
	res.status(201).json(withdrawal);
});

//@desc delete deposit
//@route DELETE /api/deposits/:id
//@access  Private
const deleteWithdraw = asyncHandler(async (req, res) => {
	//get ticket using the id in the JWT
	const withdrawal = await Withdraw.findById(req.params.id);

	if (!withdrawal) {
		res.status(404);
		throw new Error("Deposit not found");
	}

	if (withdrawal.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("Not authorized");
	}

	await withdrawal.remove();

	res.status(200).json({ success: true });
});

//@desc Update deposit
//@route PUT /api/deposits/:id
//@access  Private
const updateWithdraw = asyncHandler(async (req, res) => {
	//get ticket using the id in the JWT
	const withdrawal = await Withdraw.findById(req.params.id);

	if (!withdrawal) {
		res.status(404);
		throw new Error("Withdrawal not found");
	}

	if (withdrawal.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("Not authorized");
	}

	const updateWithdraw = await Withdraw.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);

	res.status(200).json(updateWithdraw);
});

module.exports = {
	getWithdrawals,
	makeWithdraw,
	deleteWithdraw,
	updateWithdraw,
};
