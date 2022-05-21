const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const BankAction = require("../models/bankModel");

//@desc get user bankActions
//@route GET /api/bankActions
//@access  Private
const getBankActions = asyncHandler(async (req, res) => {
	//get user using the id in the JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("User not found");
	}
	const bankActions = await BankAction.find({ user: req.user.id });

	res.status(200).json(bankActions);
});

const createBankAction = asyncHandler(async (req, res) => {
	const { action, amount, status } = req.body;

	if (!action || !amount) {
		res.status(400);
		throw new Error("Please choose action and amount");
	}

	//get user using the id in the JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("User not found");
	}

	const bankAction = await BankAction.create({
		action,
		amount,
		balance: req.user.balance,
		user: req.user.id,
		status: "new",
	});
	res.status(201).json(bankAction);
});

//@desc delete ticket
//@route DELETE /api/bankActions/:id
//@access  Private
const deleteBankAction = asyncHandler(async (req, res) => {
	//get ticket using the id in the JWT
	const bankAction = await BankAction.findById(req.params.id);

	if (!bankAction) {
		res.status(404);
		throw new Error("Action not found");
	}

	if (bankAction.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("Not authorized");
	}

	await bankAction.remove();

	res.status(200).json({ success: true });
});

//@desc Update tickets
//@route PUT /api/tickets/:id
//@access  Private
const updateBankAction = asyncHandler(async (req, res) => {
	//get ticket using the id in the JWT
	const bankAction = await BankAction.findById(req.params.id);

	if (!bankAction) {
		res.status(404);
		throw new Error("Action not found");
	}

	if (bankAction.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("Not authorized");
	}

	const updatedBankAction = await BankAction.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);

	res.status(200).json(updatedBankAction);
});

module.exports = {
	getBankActions,
	createBankAction,
	deleteBankAction,
	updateBankAction,
};
