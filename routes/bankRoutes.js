const express = require("express");
const router = express.Router();
const {
	getBankActions,
	updateBankAction,
	createBankAction,
	deleteBankAction,
} = require("../controllers/bankController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getBankActions).post(protect, createBankAction);
router
	.route("/:id")
	.delete(protect, deleteBankAction)
	.put(protect, updateBankAction);

module.exports = router;
