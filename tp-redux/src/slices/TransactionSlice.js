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
            state.unshift(action.payload)
            agregarDataStorage(state)
        },
        editarTransaccion: (state, action) => {
            const { transaction } = action.payload
            const currentTransaction = state.find((item) => item.id === transaction.id)
            console.log(currentTransaction);

            if (currentTransaction) {
                Object.assign(currentTransaction, transaction);
                agregarDataStorage(state)
            }
        },
        eliminarTransaccion: (state, action) => {
            const listaActualizada = state.filter(item => item.id !== action.payload)
            agregarDataStorage(listaActualizada)
        }
    }
})

export const { nuevaTransaccion, editarTransaccion, eliminarTransaccion } = transactionSlice.actions
export default transactionSlice.reducer