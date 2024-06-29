import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'

export const Header = () => {

  return (
    <header className={styles.headerContainer}>
      <Link to='/'>NUEVA TRANSACCION</Link>
      <Link to='/edit'>TRANSACCIONES</Link>
      <Link to='/search'>BUSCAR</Link>
      <Link to='/resume'>RESUMEN</Link>
    </header>
  )
}
