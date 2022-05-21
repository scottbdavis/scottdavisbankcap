import React from "react";
import Deposit from "../Deposit";
import Withdraw from "../Withdraw";

function CurrentBalance(deposit, withdraw) {
	const Balance = () => {
		let deposit = 0; // state of this transaction
		const [totalState, setTotalState] = React.useState(0);
		const [isDeposit, setIsDeposit] = React.useState(true);

		let status = `Current Balance $ ${totalState} `;
		console.log(`Account Rendered with isDeposit: ${isDeposit}`);
		const handleChange = (event) => {
			console.log(`handleChange ${event.target.value}`);
			deposit = Number(event.target.value);
		};
		const handleSubmit = () => {
			let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
			if (newTotal < 0) {
				return alert("Insufficient funds");
			}
			setTotalState(newTotal);
			event.preventDefault();
		};

		return (
			<form onSubmit={handleSubmit}>
				<h2 id="total">{status}</h2>
				<ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
			</form>
		);
	};
}

export default CurrentBalance;
