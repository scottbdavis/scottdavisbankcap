export const initialState = {
	bankbalance: 0,
};

const balanceReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "UPDATE_BALANCE":
			console.log("UPDATE_PRICE", payload);
			return {
				...state,
				bankbalance: payload.bankbalance,
			};
		default:
			throw new Error(`No case for type ${type} found in balanceReducer`);
	}
};

export default balanceReducer;
