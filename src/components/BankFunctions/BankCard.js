import React from "react";
import { useState, useContext } from "react";
import ReactRouterDOM from "react-dom";
import classes from "../UI/Card.module.css";
import BankSummary from "./BankSummary";

function BankCard(props) {
	const Route = ReactRouterDOM.Route;
	const Link = ReactRouterDOM.Link;
	const HashRouter = ReactRouterDOM.HashRouter;
	const UserContext = React.createContext(null);

	function classes() {
		const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
		const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
		return "card mb-3 " + bg + txt;
	}

	return (
		<div className={classes()} style={{ maxWidth: "35rem" }}>
			<div className="card-header">{props.header}</div>
			<div className="card-body">
				{props.title && <h5 className="card-title">{props.title}</h5>}
				{props.text && <p className="card-text">{props.text}</p>}
				{props.text2 && <p className="card-text">{props.text2}</p>}
				{props.body}
				{props.img}
				{props.status && <div id="createStatus">{props.status}</div>}
			</div>
		</div>
	);
}

export default BankCard;

// function BankCard() {
// 	const [name, setName] = useState("Scott");
// 	const [email, setEmail] = useState("sdavisb@gmail.com");
// 	const [password, setPassword] = useState("adfda");

// 	return (
// 		<div className={classes.bankcard}>
// 			<h1>This is the card for entry</h1>
// 		</div>
// 	);
// }

// export default BankCard;
