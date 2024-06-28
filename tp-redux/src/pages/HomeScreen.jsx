import React from 'react'
import { TransactionForm } from '../components/TransactionForm'

export const HomeScreen = () => {


  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'center'}}>
        <h2>Nueva Transacción</h2>

        <TransactionForm textButton='Nueva Transacción'/>
    </div>
  )
}
