// import { useState, useContext } from "react";
// import BankCard from "./BankCard";
// import UserContext from "../../store/UserContext";

// function CreateAccount() {
// 	const [show, setShow] = useState(true);
// 	const [status, setStatus] = useState("");
// 	const [name, setName] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [btndisabled, setBtnDisabled] = useState(true);
// 	const ctx = useContext(UserContext);

// 	function validate(field, label) {
// 		if (!field) {
// 			setBtnDisabled(true);
// 			setStatus("Error: you must fill in your " + label);

// 			setTimeout(() => setStatus(""), 3000);
// 			return false;
// 		}
// 		setBtnDisabled(false);
// 		return true;
// 	}

// 	function validatePassword(field, label) {
// 		if (field.length < 8) {
// 			setBtnDisabled(true);
// 			setStatus("Error: Your password must have 8 or more characters " + label);
// 			setTimeout(() => setStatus(""), 3000);
// 			return false;
// 		}
// 		setBtnDisabled(false);
// 		return true;
// 	}

// 	function handleCreate() {
// 		console.log(name, email, password);
// 		if (!validate(name, "name")) return;
// 		if (!validate(email, "email")) return;
// 		if (!validatePassword(password, "password")) return;
// 		if (!validate(password, "password")) return;
// 		ctx.users.push({ name, email, password, balance: 100 });

// 		setShow(false);
// 	}

// 	function clearForm() {
// 		setName("");
// 		setEmail("");
// 		setPassword("");
// 		setShow(true);
// 	}

// 	return (
// 		<BankCard
// 			bgcolor="primary"
// 			header="Create Account"
// 			status={status}
// 			body={
// 				show ? (
// 					<>
// 						Name
// 						<br />
// 						<input
// 							type="input"
// 							className="form-control"
// 							id="name"
// 							placeholder="Enter name"
// 							value={name}
// 							onChange={(e) => setName(e.currentTarget.value)}
// 						/>
// 						<br />
// 						Email address
// 						<br />
// 						<input
// 							type="input"
// 							className="form-control"
// 							id="email"
// 							placeholder="Enter email"
// 							value={email}
// 							onChange={(e) => setEmail(e.currentTarget.value)}
// 						/>
// 						<br />
// 						Password
// 						<br />
// 						<input
// 							type="password"
// 							className="form-control"
// 							id="password"
// 							placeholder="Enter password"
// 							value={password}
// 							onChange={(e) => setPassword(e.currentTarget.value)}
// 						/>
// 						<br />
// 						<button
// 							type="submit"
// 							isdisabled="false"
// 							className="btn btn-light"
// 							onClick={handleCreate}
// 						>
// 							Create Account
// 						</button>
// 					</>
// 				) : (
// 					<>
// 						<h5>Success</h5>
// 						<button type="submit" className="btn btn-light" onClick={clearForm}>
// 							Add another account
// 						</button>
// 					</>
// 				)
// 			}
// 		/>
// 	);
// }

// export default CreateAccount;
