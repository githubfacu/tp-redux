import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
    <header>
        <nav>
            <Link to='/'>Nueva Transacción</Link>
            <Link to='/edit'>Transacciones</Link>
            <Link to='/search'>Buscar</Link>
            <Link to='/resume'>Resumen</Link>
        </nav>
    </header>
  )
}
