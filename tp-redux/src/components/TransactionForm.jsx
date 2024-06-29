import React, { useEffect, useState } from 'react'
import styles from '../styles/TransactionForm.module.css'
import { useDispatch } from 'react-redux'
import { editarTransaccion, nuevaTransaccion } from '../slices/TransactionSlice'

export const TransactionForm = ({actionType, currentTransaction, switchOff}) => {

    const categorias = [
        'Alimentos', 'Trasporte', 'Contabilidad', 'Empleados'
    ]

    const date = new Date
    const today = date.toLocaleDateString().split('/')
    const month = today[1].length > 1 ? today[1] : `0${today[1]}`
    const fechaInicial = `${today[2]}-${month}-${today[0]}`

    const [fecha, setFecha] = useState(fechaInicial)
    const [categoria, setCategoria] = useState('')
    const [monto, setMonto] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [tipo, setTipo] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if(currentTransaction){
            setFecha(currentTransaction.fecha)
            setCategoria(currentTransaction.categoria)
            setMonto(currentTransaction.monto)
            setDescripcion(currentTransaction.descripcion)
            setTipo(currentTransaction.tipo)
        }
    }, [])

    const submitForm = (e) => {
        e.preventDefault()

        if (!fecha || !categoria || !monto || !descripcion || !tipo) {
            return alert('Todos los campos son obligatorios')
        }

        let transaction = {
            fecha,
            categoria,
            monto,
            descripcion,
            tipo
        }

        if (actionType === 'Nueva') {
            transaction.id = Math.floor(Math.random() * 10000)
            dispatch(nuevaTransaccion(transaction))
            alert('Transacción generada con éxito')
        }
        if (actionType === 'Actualizar') {
            transaction.id = currentTransaction.id
            dispatch(editarTransaccion({transaction}))
            alert('Transacción Actualizada')
            switchOff()
        }

        setFecha('')
        setCategoria('')
        setMonto('')
        setDescripcion('')
        setTipo('')
    }


  return (
    <form className={styles.container} onSubmit={submitForm}>
        <section className={styles.section}>
            <div className={styles.inputDiv}>
                <label htmlFor="">Fecha</label>
                <input type="date" min={fechaInicial} value={fecha} onChange={(e) => setFecha(e.target.value)}/>
            </div>
            <div className={styles.inputDiv}>
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
        </section>

        <section className={styles.section}>
            <div className={styles.inputDiv}>
                <label htmlFor="">Monto</label>
                <input type="number"  value={monto} onChange={(e) => setMonto(e.target.value)}/>
            </div>
            <div className={styles.inputDiv}>
                <label htmlFor="">Tipo</label>
                <select name="tipoPago" id="" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                    <option value="">Selecciona un tipo</option>
                    <option name='tipoPago' value='Pago'>Pago</option>
                    <option name='tipoPago' value='Ingreso'>Ingreso</option>
                </select>
            </div>            
        </section>

        <div className={styles.inputDiv}>
            <label htmlFor="">Descripción</label>
            <textarea type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
        </div>

        <button type='submit'>{actionType} Transacción</button>
    </form>
  )
}
