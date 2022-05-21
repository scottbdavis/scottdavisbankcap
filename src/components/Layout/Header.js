import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton.js";
import HeaderBalButton from "./HeaderBalButton.js";
import BankingImage from "../../Assets/BankingImage.jpeg";
import BankCard from "../BankFunctions/BankCard.js";
import { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../UI/Spinner";
import BackButton from "../UI/BackButton";

import classes from "./Header.module.css";

import UserContext from "../../store/UserContext.js";

import { FaSignInAlt } from "react-icons/fa";

import { login, reset } from "../../features/auth/authSlice";

const Header = (props) => {
	// const { user } = useSelector((state) => state.auth);
	// const [name] = useState(user.name);
	const ctx = useContext(UserContext);
	return (
		<Fragment>
			<div className={classes["main-image"]}>
				<img src={BankingImage} alt="digital banking image"></img>
			</div>
			<header className={classes.header}>
				<h3>BankFast - Money When You Need It </h3>

				<span className={classes.button}>
					<HeaderCartButton onClick={props.onShowCart} />
				</span>
			</header>
		</Fragment>
	);
};

export default Header;
