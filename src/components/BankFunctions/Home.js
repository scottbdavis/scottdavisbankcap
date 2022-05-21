import React from "react";
import { useContext } from "react";
import BankCard from "./BankCard";
import bank from "../../Assets/bank.png";
import UserContext from "../../store/UserContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../UI/Spinner";

function Home() {
	// const { user } = useSelector((state) => state.auth);
	// const [name] = useState(user.name);
	const ctx = useContext(UserContext);

	return (
		<>
			<div>
				{/* <label htmlFor="name">
					<h1>Hey {name}</h1>
				</label> */}
			</div>
			<BankCard
				txtcolor="blue"
				title="BankFast"
				text="Welcome to BankFast."
				text2="Register or Login to get started"
				// body={<h3>Your Current Balance is ${ctx.balance}</h3>}
				img={<img src={bank} className="img-fluid" alt="Responsive image" />}
			/>
		</>
	);
}

export default Home;
