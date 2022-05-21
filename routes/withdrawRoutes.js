const express = require("express");
const router = express.Router();
const {
	makeWithdraw,
	getWithdrawals,
	deleteWithdraw,
	updateWithdraw,
} = require("../controllers/withdrawController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getWithdrawals).post(protect, makeWithdraw);
router
	.route("/:id")
	.delete(protect, deleteWithdraw)
	.put(protect, updateWithdraw);

module.exports = router;
