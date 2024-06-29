import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/ResumeScreen.module.css'

export const ResumeScreen = () => {

  const transacciones = useSelector(state => state.transactions)
  const [totalPagos, setTotalPagos] = useState(0)
  const [totalIngresos, setTotalIngresos] = useState(0)
  const [deltaColor, setDeltaColor] = useState('black')

  const balanceTotal = totalIngresos - totalPagos

  useEffect(() => {
    if (balanceTotal > 0) {
      setDeltaColor('var(--green)')
    }
    if (balanceTotal < 0) {
      setDeltaColor('red')
    }
  }, [balanceTotal])

  useEffect(() => {
    let sumaPagos = 0
    let sumaIngresos = 0

    transacciones.forEach(transaccion => {
      if (transaccion.tipo === 'Pago') {
        sumaPagos += parseFloat(transaccion.monto)
      }
      if (transaccion.tipo === 'Ingreso') {
        sumaIngresos += parseFloat(transaccion.monto)
      }
    })

    setTotalPagos(sumaPagos)
    setTotalIngresos(sumaIngresos)
  }, [])




  return (
    <main>
      <h2>Balance de Finanazas</h2>

      <div className={styles.containerDiv}>

        <div>
          <span style={{fontSize:32, marginRight:8}}>Balance: <strong style={{color: deltaColor}}>{balanceTotal}</strong> ARS</span>
          <span style={{marginLeft:8}}>Ingresos Totales: <strong>{totalIngresos}</strong> ARS</span>
          <span style={{marginLeft:8}}>Pagos Totales: <strong>{totalPagos}</strong> ARS</span>
        </div>

        <table style={{padding: '8px'}}>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
          {
            (transacciones.length > 0) ?
            transacciones.map(transaccion => {
              return <tr>
                <td>{transaccion.fecha}</td>
                <td>{transaccion.tipo}</td>
                <td style={{textAlign: 'end', color: transaccion.tipo === 'Pago' ? 'red' : 'var(--green)'}}>{transaccion.monto}</td>
              </tr>
            })
            :
            <tr style={{position: 'absolute'}}>
              <td style={{border: 'none'}}>
                <p>No hay transacciones generadas</p>
              </td>
            </tr>
          }

        </table>

      </div>
    </main>
  )
}
