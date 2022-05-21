import axios from "axios";

const API_URL = "/api/deposits/";

//create new bank action

const makeDeposit = async (depositData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.post(API_URL, depositData, config);

	return response.data;
};

//get user deposits

const getDeposits = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(API_URL, config);

	return response.data;
};

const depositService = {
	makeDeposit,
	getDeposits,
};

export default depositService;
