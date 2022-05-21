import axios from "axios";

const API_URL = "/api/withdrawals/";

//make new withdrawal

const makeWithdraw = async (withdrawData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.post(API_URL, withdrawData, config);

	return response.data;
};

//get user withdrawals

const getWithdrawals = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(API_URL, config);

	return response.data;
};

const withdrawService = {
	makeWithdraw,
	getWithdrawals,
};

export default withdrawService;
