import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bankActionService from "./bankActionService";

const initialState = {
	bankActions: [],
	bankAction: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	balance: 0,
	message: "",
};

//Create new bank action:
export const createBankAction = createAsyncThunk(
	"bankActions/create",
	async (bankActionData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await bankActionService.createBankAction(bankActionData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

//Get user bank actions:
export const getBankActions = createAsyncThunk(
	"bankActions/getAll",
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await bankActionService.getBankActions(token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const bankActionSlice = createSlice({
	name: "bankAction",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(createBankAction.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createBankAction.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(createBankAction.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getBankActions.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getBankActions.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.bankActions = action.payload;
			})
			.addCase(getBankActions.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = bankActionSlice.actions;
export default bankActionSlice.reducer;
