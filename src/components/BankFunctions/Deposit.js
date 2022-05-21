// import { useState, useContext } from "react";
// import context from "react-bootstrap/esm/AccordionContext";
// import UserContext from "../../store/UserContext";
// import BankCard from "./BankCard";
// import Button from "../UI/Button";
// import classes from "./BankFunctions.css";

// function Deposit() {
// 	const [show, setShow] = useState(true);
// 	const [status, setStatus] = useState("");
// 	const [amount, setAmount] = useState(0);

// 	const ctx = useContext(UserContext);

// 	function validate(amount, label) {
// 		if (!amount) {
// 			setStatus("Error: you must enter an " + label);
// 			setTimeout(() => setStatus(""), 3000);
// 			return false;
// 		}
// 		return true;
// 	}
// 	function validateDeposit(amount, label) {
// 		if (amount < 0) {
// 			setStatus("Error: You must enter only a positive " + label);
// 			setAmount("");
// 			setTimeout(() => setStatus(""), 3000);
// 			return false;
// 		}

// 		return true;
// 	}

// 	function handleDeposit() {
// 		if (!validate(amount, "amount")) return;
// 		if (!validateDeposit(amount, "amount")) return;

// 		// ctx.users.balance += parseInt(amount);
// 		// ctx.balance += parseInt(amount);
// 		// ctx.users.push({ balance: ctx.users.balance });
// 		setShow(false);
// 	}

// 	function clearForm() {
// 		setAmount(0);

// 		setShow(true);
// 	}

// 	return (
// 		<BankCard
// 			bgcolor="primary"
// 			header="Deposit"
// 			status={status}
// 			body={
// 				show ? (
// 					<>
// 						Balance
// 						<br />
// 						{/* <h3>{ctx.balance}</h3> */}
// 						Amount
// 						<br />
// 						<input
// 							type="input"
// 							className="form-control"
// 							id="amount"
// 							placeholder="Enter non-negative deposit amount"
// 							value={amount}
// 							onChange={(e) => setAmount(e.currentTarget.value)}
// 						/>
// 						<br />
// 						<button
// 							type="submit"
// 							className="btn btn-light"
// 							onClick={handleDeposit}
// 						>
// 							Deposit Funds
// 						</button>
// 					</>
// 				) : (
// 					<>
// 						<h5>Success, you deposited ${amount}</h5>
// 						<button type="submit" className="btn btn-light" onClick={clearForm}>
// 							Make another Deposit?
// 						</button>
// 					</>
// 				)
// 			}
// 		/>
// 	);
// }

// export default Deposit;
