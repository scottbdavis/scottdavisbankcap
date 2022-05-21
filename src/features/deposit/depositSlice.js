import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import depositService from "./depositService";

const initialState = {
	deposits: [],
	deposit: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
	balance: 0,
};

//make new deposit:
export const makeDeposit = createAsyncThunk(
	"deposits/create",
	async (depositData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await depositService.makeDeposit(depositData, token);
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

//Get user deposits:
export const getDeposits = createAsyncThunk(
	"deposits/getAll",
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await depositService.getDeposits(token);
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

export const depositSlice = createSlice({
	name: "deposit",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(makeDeposit.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(makeDeposit.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(makeDeposit.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getDeposits.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getDeposits.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.deposits = action.payload;
			})
			.addCase(getDeposits.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = depositSlice.actions;
export default depositSlice.reducer;
