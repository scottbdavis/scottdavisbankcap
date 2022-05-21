import classes from "./AvailableFunctions.module.css";
import Card from "../UI/Card";
import FunctionItem from "./FunctionItem/FunctionItem";

const DUMMY_FUNCTIONS = [
	{
		id: "f1",
		name: "Safety Deposit Box",
		description: "Keep Personal Belongings Safe",
		fee: "50",
	},
	{
		id: "f2",
		name: "Gift Debit Card",
		description: "Send a debit card gift today with free personalized card",
		fee: "100",
	},
];

const AvailableFunctions = () => {
	const functionsList = DUMMY_FUNCTIONS.map((functions) => (
		<FunctionItem
			id={functions.id}
			key={functions.id}
			name={functions.name}
			description={functions.description}
			fee={functions.fee}
		/>
	));

	return (
		<section className={classes.functions}>
			<Card>
				<h1>Additional BankFast Services</h1>
				<ul>{functionsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableFunctions;
