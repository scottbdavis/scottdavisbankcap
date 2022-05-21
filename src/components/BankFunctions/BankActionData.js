import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	getBankActions,
	reset,
} from "../../features/bankAction/bankActionSlice";
import Spinner from "../UI/Spinner";
import BackButton from "../UI/BackButton";
import BankActionItem from "../UI/BankActionItem";
import { TravBankStyles } from "../BankFunctions/TravBankStyles.css";

function BankActionData() {
	const { bankAction, bankActions, isLoading, isSuccess } = useSelector(
		(state) => state.bankAction
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
		dispatch(getBankActions());
	}, [dispatch]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<BackButton url="/" />
			<h1>Bank Action Data</h1>
			<div className="bankActions">
				<div className="bankActions-headings">
					<div>Date</div>
					<div>Actions</div>
					<div>Amounts</div>
					<div></div>
				</div>
				{bankActions.map((bankAction) => {
					<BankActionItem key={bankAction._id} bankAction={bankAction} />;
				})}
			</div>
		</>
	);
}

export default BankActionData;
