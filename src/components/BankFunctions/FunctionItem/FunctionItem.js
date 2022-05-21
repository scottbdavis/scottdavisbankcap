import { useContext } from "react";
import classes from "./FunctionItem.module.css";
import FunctionItemForm from "./FunctionItemForm";
import CartContext from "../../../store/cart-context";

const FunctionItem = (props) => {
	const cartCtx = useContext(CartContext);

	const fee = `${props.fee}`;

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			fee: props.fee,
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.fee}>{fee}</div>
			</div>
			<div>
				<FunctionItemForm onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default FunctionItem;
