import React from 'react'
import styles from '../styles/TransactionList.module.css'

export const TransactionList = ({transaccionesFiltradas}) => {

  console.log(transaccionesFiltradas);
    
  return (
    <div className={styles.containerDiv}>
      <table>
        <thead>
          <tr>
						<th>Id</th>
            <th>Fecha</th>
						<th>Categoría</th>
						<th>Monto</th>
						<th>Tipo</th>
						<th>Descripción</th>
          </tr>
        </thead>
        <tbody>
        {
          (transaccionesFiltradas.length > 0) ?
          transaccionesFiltradas.map(transaccion => {
            return <tr key={transaccion.id}>
              <td>{transaccion.id}</td>
              <td>{transaccion.fecha}</td>
              <td>{transaccion.categoria}</td>
              <td>{transaccion.monto}</td>
              <td>{transaccion.tipo}</td>
              <td className={styles.descripcion}>{transaccion.descripcion}</td>
            </tr>
          })
          :
          <tr style={{position: 'absolute'}}>
            <td style={{border: 'none'}}>
              <p>No se encontraron resultados de búsqueda</p>
            </td>
          </tr>
        }
        </tbody>





      </table>

    </div>
  )
}
