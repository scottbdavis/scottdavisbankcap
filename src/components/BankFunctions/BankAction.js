import React from "react";
import { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../UI/Spinner";
import BackButton from "../UI/BackButton";
import {
	createBankAction,
	reset,
} from "../../features/bankAction/bankActionSlice";

import UserContext from "../../store/UserContext";

function BankAction() {
	const ctx = useContext(UserContext);

	const { user } = useSelector((state) => state.auth);

	const { isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.bankAction
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
			dispatch(reset());
			navigate("/bankActions");
			toast.success("Success");
		}

		dispatch(reset());
	}, [dispatch, isError, isSuccess, navigate, message, isLoading]);

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(createBankAction({ action, amount }));
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<BackButton url="/" />
			<section className="heading">
				<h1>Current Balance = {(ctx.balance += parseInt(amount))};</h1>
			</section>
			<section className="heading">
				<div>
					<h1>New Bank Action</h1>
					<h2>Deposit or Withdraw Below</h2>
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
							<button className="btn btn-primary">Submit</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default BankAction;
