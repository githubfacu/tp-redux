import React, { useState } from 'react'
import styles from '../styles/TransactionForm.module.css'
import { useDispatch } from 'react-redux'
import { nuevaTransaccion } from '../slices/TransactionSlice'

export const TransactionForm = ({textButton}) => {

    const categorias = [
        'Alimentos', 'Trasporte', 'Contabilidad', 'Empleados'
    ]

    const [fecha, setFecha] = useState('')
    const [categoria, setCategoria] = useState('')
    const [monto, setMonto] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [tipo, setTipo] = useState('')

    const dispatch = useDispatch()

    const submitForm = (e) => {
        e.preventDefault()

        if (!fecha || !categoria || !monto || !descripcion || !tipo) {
            return alert('Todos los campos son obligatorios')
        }

        const transaction = {
            id: Math.floor(Math.random() * 10000),
            fecha,
            categoria,
            monto,
            descripcion,
            tipo
        }

        console.log(transaction);

        dispatch(nuevaTransaccion(transaction))
        alert('Transacción agregada')

        setFecha('')
        setCategoria('')
        setMonto('')
        setDescripcion('')
        setTipo('')
    }


  return (
    <form className={styles.container} onSubmit={submitForm}>
        <div className={styles.inputContainer}>
            <label htmlFor="">Fecha</label>
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor="">Categoría</label>
            <select name="categoria" id="" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Selecciona una categoría</option>
                {
                    categorias.map((cat, index)=>{
                        return <option name="categoria" value={cat} key={index}>
                            {cat}
                        </option>
                    })
                }
            </select>
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor="">Monto</label>
            <input type="number"  value={monto} onChange={(e) => setMonto(e.target.value)}/>
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor="">Descripción</label>
            <textarea type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
        </div>
        <div className={styles.inputContainer}>
            <label htmlFor="">Tipo</label>
            <select name="tipoPago" id="" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option value="">Selecciona un item</option>
                <option name='tipoPago' value='Pago'>Pago</option>
                <option name='tipoPago' value='Ingreso'>Ingreso</option>
            </select>
        </div>
        <button type='submit'>{textButton}</button>
    </form>
  )
}
