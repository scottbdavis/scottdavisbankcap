import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import withdrawService from "./withdrawService";

const initialState = {
	withdrawals: [],
	withdrawal: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
	balance: 0,
};

//make new withdrawal:
export const makeWithdraw = createAsyncThunk(
	"withdrawals/create",
	async (withdrawData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await withdrawService.makeWithdraw(withdrawData, token);
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

//Get user withdrawals:
export const getWithdrawals = createAsyncThunk(
	"withdrawals/getAll",
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await withdrawService.getWithdrawals(token);
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

export const withdrawSlice = createSlice({
	name: "withdrawal",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(makeWithdraw.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(makeWithdraw.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(makeWithdraw.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getWithdrawals.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getWithdrawals.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.withdrawals = action.payload;
			})
			.addCase(getWithdrawals.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = withdrawSlice.actions;
export default withdrawSlice.reducer;
