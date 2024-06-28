import { configureStore } from "@reduxjs/toolkit";
import TransactionSlice from "../slices/TransactionSlice";

export const store = configureStore({
    reducer: {
        transactions: TransactionSlice
    }
})