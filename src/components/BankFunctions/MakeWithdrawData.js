import { useEffect } from "react";
import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWithdrawals, reset } from "../../features/withdraw/withdrawSlice";
import TravReal from "../BankFunctions/TravReal.css";
import Spinner from "../UI/Spinner";
import BackButton from "../UI/BackButton";
import WithdrawItem from "../UI/WithdrawItem";
import UserContext from "../../store/UserContext";
import React from "react";

function MakeWithdrawData() {
	const { userContext, setUserContext } = useContext(UserContext);
	const ctx = userContext;
	let curbalance = ctx.balance;
	console.log(curbalance);

	const { withdrawals, isLoading, isSuccess } = useSelector(
		(state) => state.withdrawal
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
		dispatch(getWithdrawals());
	}, [dispatch]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<BackButton url="/bankservices" />
			<h1>Withdrawals</h1>
			<h1>Current Balance = {ctx.balance}</h1>
			<div className="tickets">
				<div className="ticket-headings">
					<div>Date</div>
					<div>Amount</div>
					<div>Status</div>
					<div></div>
				</div>
				{withdrawals.map((withdrawal) => (
					<WithdrawItem key={withdrawal._id} withdrawal={withdrawal} />
				))}
			</div>
		</>
	);
}

export default MakeWithdrawData;
