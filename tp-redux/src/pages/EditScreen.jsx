import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TransactionForm } from '../components/TransactionForm'

export const EditScreen = () => {

  const transacciones = useSelector(state => state.transactions)
  const dispatch = useDispatch()
  const [formSwitch, setFormSwitch] = useState(false)

  const editarTransaccion = (objeto) => {

	console.log(objeto);
    setFormSwitch(true)
  }


  return (
    <div>
      <h2>Lista de Transacciones</h2>

      {
        formSwitch && <TransactionForm textButton='Actualizar Transacción'/>
      }

      <table>
					<thead>
						<th>Fecha</th>
						<th>Categoría</th>
						<th>Monto</th>
						<th>Descripción</th>
						<th>Tipo</th>
						<th>Acciones</th>
					</thead>

					<tbody>
						{transacciones.map((transaccion) => {
							return (
								<tr key={transaccion.id}>
									<td>{transaccion.fecha}</td>
									<td>{transaccion.categoria}</td>
									<td>{transaccion.monto}</td>
									<td>{transaccion.descripcion}</td>
									<td>{transaccion.tipo}</td>

									<td>
										<button
                    						onClick={() => editarTransaccion(transaccion)}
										>
											Editar
										</button>
										<button
										>
											Eliminar
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
    </div>
  )
}
