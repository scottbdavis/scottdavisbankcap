import React from "react";
import { Link } from "react-router-dom";

function BankActionItem({ bankAction }) {
	return (
		<div className="bankAction">
			<div>{new Date(bankAction.createdAt).toLocaleString("en-US")}</div>
			<div>{bankAction.action}</div>
			<div className={`status status-${bankAction.status}`}>
				{bankAction.status}
			</div>
			<Link
				to={`/bankAction/${bankAction._id}`}
				className="btn btn-success btn-sm"
			>
				View
			</Link>
		</div>
	);
}

export default BankActionItem;
