import { useState } from "react";
import { useSelector } from "react-redux";

import CreateAccount from "../components/BankFunctions/CreateAccount";

import UserContext from "./UserContext";

const UserContextProvider = (props) => {
	const { user } = useSelector((state) => state.auth);

	const [userContext, setUserContext] = useState({
		users: [],
		name: "",
		email: "",
		password: "",
		balance: 0,
	});

	return (
		<UserContext.Provider value={{ userContext, setUserContext }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContextProvider;
