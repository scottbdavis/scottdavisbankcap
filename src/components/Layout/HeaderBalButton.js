import { Button } from "bootstrap";
import classes from "./HeaderBalButton.module.css";
import { useContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import UserContext from "../../store/UserContext";

function HeaderBalButton() {
	const ctx = useContext(UserContext);
	return (
        
		<button className={classes.balbutton}>
			<span>Your Current Balance</span>

			<span className={classes.balbadge}>${ctx.balance}</span>
		</button>
	);
}

export default HeaderBalButton;
