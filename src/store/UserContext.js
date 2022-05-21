import React from "react";

const UserContext = React.createContext({
	users: [],
	name: "",
	email: "",
	password: "",
	balance: 0,
});

export default UserContext;
