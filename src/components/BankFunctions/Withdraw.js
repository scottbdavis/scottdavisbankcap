// import { useState, useContext } from "react";
// import context from "react-bootstrap/esm/AccordionContext";
// import UserContext from "../../store/UserContext";
// import BankCard from "./BankCard";
// import classes from "./BankFunctions.css";
// import { FaMoneyBillAlt, FaPiggyBank } from "react-icons/fa";

// import { Link } from "react-router-dom";

// function Withdraw() {
// 	const [show, setShow] = useState(true);
// 	const [status, setStatus] = useState("");
// 	const [amount, setAmount] = useState(0);

// 	const ctx = useContext(UserContext);

// 	function validate(amount, label) {
// 		if (!amount || amount < 0) {
// 			setStatus("Error: you must enter a positive " + label);
// 			setTimeout(() => setStatus(""), 3000);
// 			return false;
// 		}
// 		return true;
// 	}
// 	function validateWithdrawal(amount, label) {
// 		if (amount < 0) {
// 			setStatus("Error: You must enter only a positive " + label);
// 			setTimeout(() => setStatus(""), 3000);
// 			return false;
// 		}

// 		return true;
// 	}

// 	function handleWithdrawal() {
// 		if (!validate(amount, "amount")) return;
// 		if (!validateWithdrawal(amount, "amount")) return;
// 		if (amount > ctx.balance) {
// 			alert("insufficient funds");
// 			setAmount("");
// 			setStatus("");
// 		} else {
// 			// ctx.users.balance += parseInt(amount);
// 			ctx.balance -= parseInt(amount);
// 			// ctx.users.push({ balance: ctx.users.balance });
// 			setShow(false);
// 		}
// 	}

// 	function clearForm() {
// 		setAmount(0);

// 		setShow(true);
// 	}

// 	return (
// 		<BankCard
// 			bgcolor="warning"
// 			header="Withdraw"
// 			status={status}
// 			body={
// 				show ? (
// 					<>
// 						Balance
// 						<br />
// 						<h3>{ctx.balance}</h3>
// 						Amount
// 						<br />
// 						<input
// 							type="input"
// 							className="form-control"
// 							id="amount"
// 							placeholder="Enter withdrawal amount"
// 							value={amount}
// 							onChange={(e) => setAmount(e.currentTarget.value)}
// 						/>
// 						<br />
// 						<button
// 							type="submit"
// 							className="btn btn-light"
// 							onClick={handleWithdrawal}
// 						>
// 							Withdraw Funds
// 						</button>
// 					</>
// 				) : (
// 					<>
// 						<h5>Success, you withdrew ${amount}</h5>
// 						<button type="submit" className="btn btn-light" onClick={clearForm}>
// 							Make another Withdrawal?
// 						</button>
// 						<br></br>

// 						<Link to="/bankservices" className="btn btn-success btn-block">
// 							<FaMoneyBillAlt />
// 							Return to all Bank Services
// 						</Link>
// 					</>
// 				)
// 			}
// 		/>
// 	);
// }

// export default Withdraw;
