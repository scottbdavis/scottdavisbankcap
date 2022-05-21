import axios from "axios";

const API_URL = "/api/bankActions/";

//create new bank action

const createBankAction = async (bankActionData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.post(API_URL, bankActionData, config);

	return response.data;
};

//get user bank actions

const getBankActions = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	const response = await axios.get(API_URL, config);

	return response.data;
};

const bankActionService = {
	createBankAction,
	getBankActions,
};

export default bankActionService;
