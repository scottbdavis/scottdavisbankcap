import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useContext } from "react";
import { FaMoneyBillAlt, FaPiggyBank } from "react-icons/fa";
import bank from "../../Assets/bank.png";
import { Link } from "react-router-dom";
import context from "react-bootstrap/esm/AccordionContext";
import UserContext from "../../store/UserContext";

function BankServices() {
	const { userContext, setUserContext } = useContext(UserContext);
	const ctx = userContext;
	// let balance = ctx.balance;

	// const { userContext, setUserContext } = useContext(UserContext);
	// const ctx = userContext;
	const [amount, setAmount] = useState();
	const [show, setShow] = useState(true);

	const { user } = useSelector((state) => state.auth);

	const [name] = useState(user.name);
	const [email] = useState(user.email);
	const [balance] = useState(user.balance);

	useEffect(() => {
		if (user) {
			setUserContext({
				users: [],
				name: user.name,
				email: user.email,
				password: "",
				balance: user.balance,
			});
		} else {
			setUserContext({
				users: [],
				name: "",
				email: "",
				password: "",
				balance: "",
			});
		}
		console.log("balance", balance);
		console.log("BankServices", user);
	}, [user]);

	return (
		<>
			<section className="heading">
				<h1>
					Hello {name}, <br />
					Email {email}, <br />
					Your Balance is ${balance}
				</h1>
			</section>
			<Link to="/deposits" className="btn btn-warning btn-lg">
				<FaPiggyBank />
				Make a Deposit
			</Link>
			<br></br>
			<Link to="/withdrawals" className="btn btn-warning btn-block">
				<FaMoneyBillAlt />
				Make a Withdrawal
			</Link>
			<div>
				<img src={bank} className="img-fluid" alt="bank" />
			</div>
		</>
	);
}

export default BankServices;
