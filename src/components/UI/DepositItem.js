import React from "react";
import { Link } from "react-router-dom";

function DepositItem({ deposit }) {
	return (
		<div className="ticket">
			<div>{new Date(deposit.createdAt).toLocaleString("en-US")}</div>
			<div>{deposit.amount}</div>
			<div className={`status status-${deposit.status}`}>{deposit.status}</div>
			<Link to={`/deposit/${deposit._id}`} className="btn btn-reverse btn-sm">
				View
			</Link>
		</div>
	);
}

export default DepositItem;
