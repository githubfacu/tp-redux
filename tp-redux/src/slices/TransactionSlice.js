import { createSlice } from "@reduxjs/toolkit";

const transactionsStorage = localStorage.getItem('transactions')
const initialState = transactionsStorage ? JSON.parse(transactionsStorage) : []

const agregarDataStorage = (array) => {
    localStorage.setItem('transactions', JSON.stringify(array))
}

const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        nuevaTransaccion: (state, action) => {
            state.push(action.payload)
            agregarDataStorage(state)
        },
        editar: (state, action) => {

            

            state.push(action.payload)
            agregarDataStorage(state)
        }
    }
})

export const { nuevaTransaccion } = transactionSlice.actions
export default transactionSlice.reducer