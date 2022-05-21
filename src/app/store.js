import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import bankActionReducer from "../features/bankAction/bankActionSlice";
import depositReducer from "../features/deposit/depositSlice";
import withdrawReducer from "../features/withdraw/withdrawSlice";
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// function reducer(state = initialState, action) {
// 	return state;
// }

export const store = configureStore({
	reducer: {
		auth: authReducer,
		bankAction: bankActionReducer,
		deposit: depositReducer,
		withdrawal: withdrawReducer,
	},
});
