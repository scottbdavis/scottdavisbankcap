const express = require("express");
const router = express.Router();
const {
	makeDeposit,
	getDeposits,
	deleteDeposit,
	updateDeposit,
} = require("../controllers/depositController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getDeposits).post(protect, makeDeposit);
router.route("/:id").delete(protect, deleteDeposit).put(protect, updateDeposit);

module.exports = router;
