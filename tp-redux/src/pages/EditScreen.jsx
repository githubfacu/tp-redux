import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TransactionForm } from '../components/TransactionForm'
import styles from '../styles/EditScreen.module.css'
import { eliminarTransaccion } from '../slices/TransactionSlice'

export const EditScreen = () => {

  const transacciones = useSelector(state => state.transactions)
  const dispatch = useDispatch()
  const [formSwitch, setFormSwitch] = useState(false)
  const [currentTransaction, setCurrentTransaction] = useState(null)

  const switchOff = () => {
    setFormSwitch(false)
  }

  const editarTransaccion = (objeto) => {
    setFormSwitch(true)
	setCurrentTransaction(objeto);
  }

  const transactionDelete = (id) => {
	if (confirm('Desea eliminar transacción?')) {
		dispatch(eliminarTransaccion(id))
		alert('Transacción Eliminada')
		window.location.reload()
	}
  }


  return (
    <main>
      	<h2>Lista de Transacciones</h2>

		<div className={styles.containerDiv}>
			<table>
				<thead>
					<tr>
						<th>Fecha</th>
						<th>Categoría</th>
						<th>Monto</th>
						<th>Descripción</th>
						<th>Tipo</th>
						<th>Acciones</th>						
					</tr>
				</thead>
					
				<tbody>
					{	
						transacciones.length > 0 ?
							transacciones.map((transaccion) => {
								return (
									<tr key={transaccion.id}>
										<td style={{textAlign: 'center'}}>{transaccion.fecha}</td>
										<td>{transaccion.categoria}</td>
										<td style={{textAlign: 'end'}}>{transaccion.monto}</td>
										<td className={styles.descripcion}>{transaccion.descripcion}</td>
										<td>{transaccion.tipo}</td>

										<td className={styles.actions}>
											<p onClick={() => editarTransaccion(transaccion)}>
												Editar
											</p>
											<p onClick={() => transactionDelete(transaccion.id)}>
												Eliminar
											</p>
										</td>
									</tr>
								);
							})
					:
					<tr style={{position: 'absolute'}}>
						<td style={{border: 'none'}}>
							<p>No hay transacciones generadas</p>
						</td>
					</tr>							
					}
				</tbody>				

			</table>


			{
				formSwitch && 
					<div className={styles.modalBackground}>
						<div className={styles.modalFormDiv}>
							<span onClick={switchOff}>✖</span>
							<TransactionForm actionType='Actualizar' currentTransaction={currentTransaction} switchOff={switchOff}/>							
						</div>
					</div>
			}
		</div>

    </main>
  )
}
