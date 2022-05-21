import React, { createContext } from "react";
import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import UserContext from "../../store/UserContext";
import classes from "./AllData.module.css";

function AllData() {
	const ctx = useContext(UserContext);
	const Log = ({ value, replacer = null, space = 2 }) => (
		<pre>
			<code>{JSON.stringify(value, replacer, space)}</code>
		</pre>
	);
	return (
		<>
			<h5>All Data in BankFast</h5>
			<div>
				<Log value={ctx.users}></Log>
			</div>
			<br />
		</>
	);
}

export default AllData;
