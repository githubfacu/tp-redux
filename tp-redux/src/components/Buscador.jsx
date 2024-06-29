import React from 'react'

export const Buscador = ({categorias, categoria, setCategoria, tipo, setTipo, inputFilter, setInputFilter}) => {


  return (
    <>
        <h3>Buscar</h3>
        <div style={{display: 'flex', gap: '8px', marginTop: '4px'}}>
          <input style={{padding: '6px', fontSize: '16px'}} type="text" value={inputFilter} onChange={(e) => setInputFilter(e.target.value)}/>
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
          <select name="tipoPago" id="" value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Selecciona un tipo</option>
            <option name='tipoPago' value='Pago'>Pago</option>
            <option name='tipoPago' value='Ingreso'>Ingreso</option>
          </select>
        </div>
    </>
  )
}
