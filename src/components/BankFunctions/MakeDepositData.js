import { useEffect } from "react";
import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDeposits, reset } from "../../features/deposit/depositSlice";
import TravReal from "../BankFunctions/TravReal.css";
import Spinner from "../UI/Spinner";
import BackButton from "../UI/BackButton";
import DepositItem from "../UI/DepositItem";

import UserContext from "../../store/UserContext";

import React from "react";

function MakeDepositData() {
	const { userContext, setUserContext } = useContext(UserContext);
	const ctx = userContext;
	let curbalance = ctx.balance;
	console.log(curbalance);

	const { deposits, isLoading, isSuccess } = useSelector(
		(state) => state.deposit
	);

	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			if (isSuccess) {
				dispatch(reset());
			}
		};
	}, [dispatch, isSuccess]);

	useEffect(() => {
		dispatch(getDeposits());
	}, [dispatch]);
	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<BackButton url="/bankservices" />
			<h1>Deposits</h1>
			<h1>Current Balance = {ctx.balance}</h1>
			<div className="tickets">
				<div className="ticket-headings">
					<div>Date</div>
					<div>Amount</div>
					<div>Status</div>
					<div></div>
				</div>
				{deposits.map((deposit) => (
					<DepositItem key={deposit._id} deposit={deposit} />
				))}
			</div>
		</>
	);
}

export default MakeDepositData;
