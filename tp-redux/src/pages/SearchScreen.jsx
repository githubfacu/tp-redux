import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TransactionList } from '../components/TransactionList';
import { Buscador } from '../components/Buscador';

export const SearchScreen = () => {

  const categorias = [
    'Alimentos', 'Trasporte', 'Contabilidad', 'Empleados'
  ]

  const [categoria, setCategoria] = useState('')
  const [tipo, setTipo] = useState('')
  const [inputFilter, setInputFilter] = useState('')
  const [transaccionesFiltradas, setTransaccionesFiltradas] = useState([])

  const transacciones = useSelector(state => state.transactions)


  useEffect(() => {
    const filtrarData = () => {

      if (!categoria && !tipo && !inputFilter) {
        return transacciones
      }

      return transacciones.filter(transaccion => {
        const descripcionMatch = transaccion.descripcion.toLowerCase().includes(inputFilter.toLowerCase())
        const tipoMatch = tipo === '' || transaccion.tipo === tipo
        const categoriaMatch = categoria === '' || transaccion.categoria === categoria

        return descripcionMatch && tipoMatch && categoriaMatch
      })
    }

    setTransaccionesFiltradas(filtrarData())

  }, [categoria, tipo, inputFilter])



  return (
    <main>
      <h2>Registro de Transacciones</h2>

      <div style={{padding: '16px', width: '100%'}}>
        <Buscador
          categorias={categorias}
          categoria={categoria}
          setCategoria={setCategoria}
          tipo={tipo}
          setTipo={setTipo}
          inputFilter={inputFilter}
          setInputFilter={setInputFilter}
        />

        {
          <TransactionList transaccionesFiltradas={transaccionesFiltradas}/>
        }
      </div>      
    </main>
  )
}
