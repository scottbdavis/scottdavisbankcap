import React from "react";
import { Link } from "react-router-dom";

function WithdrawItem({ withdrawal }) {
	return (
		<div className="ticket">
			<div>{new Date(withdrawal.createdAt).toLocaleString("en-US")}</div>
			<div>{withdrawal.amount}</div>
			<div className={`status status-${withdrawal.status}`}>
				{withdrawal.status}
			</div>
			<Link
				to={`/withdrawal/${withdrawal._id}`}
				className="btn btn-reverse btn-sm"
			>
				View
			</Link>
		</div>
	);
}

export default WithdrawItem;
