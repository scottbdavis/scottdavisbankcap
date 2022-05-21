import React from "react";
import { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../UI/Spinner";
import BackButton from "../UI/BackButton";
import { makeDeposit, reset } from "../../features/deposit/depositSlice";

import UserContext from "../../store/UserContext";

function MakeDeposit() {
	const { userContext, setUserContext } = useContext(UserContext);
	const ctx = userContext;
	let balance = ctx.balance;
	console.log("Deposit", balance);

	const { user } = useSelector((state) => state.auth);

	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.deposit
	);

	const [name] = useState(user.name);
	const [email] = useState(user.email);
	const [action, setAction] = useState("Deposit");
	const [amount, setAmount] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess) {
			{
				{
					balance += amount;
				}
			}
			dispatch(reset());
			navigate("/deposit-data");
			toast.success("Success");
		}

		dispatch(reset());
	}, [dispatch, isError, isSuccess, navigate, message, isLoading]);

	const onSubmit = (e) => {
		e.preventDefault();
		let ctx1 = { ...userContext };
		ctx1.balance += parseInt(amount);

		setUserContext(ctx1);
		dispatch(makeDeposit({ amount }));
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<BackButton url="/bankservices" />
			<section className="heading">
				<h1>Current Balance = {ctx.balance}</h1>
			</section>
			<section className="heading">
				<div>
					<h1>New Bank Action</h1>
					<h2>Deposit Below</h2>
				</div>
			</section>
			<section className="form">
				<div className="form-group">
					<label htmlFor="name">
						<h1>Hey {name}</h1>
					</label>
				</div>
			</section>
			<br></br>
			<section>
				<div>
					<form onSubmit={onSubmit}>
						<div className="form-group">
							<label htmlFor="action">Banking Action</label>
							<select
								name="action"
								id="action"
								value={action}
								onChange={(e) => {
									setAction(e.target.value);
								}}
							>
								<option value="Deposit">Deposit</option>
								<option value="Withdrawal">Withdrawal</option>
							</select>
						</div>
						<div className="form-group">
							<label htmlFor="amount">Amount</label>
							<input
								type="number"
								name="amount"
								className="form-control"
								value={amount}
								placeholder=""
								onChange={(e) => setAmount(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<button className="btn btn-block btn-primary">Submit</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default MakeDeposit;
