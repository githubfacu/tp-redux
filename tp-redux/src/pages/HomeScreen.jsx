import React from 'react'
import { TransactionForm } from '../components/TransactionForm'

export const HomeScreen = () => {


  return (
    <main>
        <h2>Nueva Transacción</h2>

        <TransactionForm actionType='Nueva'/>
    </main>
  )
}
