import { createContext } from "react";
import balanceReducer, { initialState } from "./balanceReducer";

const BalanceContext = createContext(initialState);

export const balanceProvider = {};
