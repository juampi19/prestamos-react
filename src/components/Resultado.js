import React from 'react'

const Resultado = ({ total, plazo, cantidad }) => {
  return (

    <div className='u-full-width resultado'>
      <h2>Resumen</h2>
      <p>Cantidad Prestamo: ${cantidad}</p>
      <p>Plazo: {plazo} meses</p>
      <p>Su pago mensual es de : ${(total / plazo).toFixed(2)}</p>
      <p>Total a Pagar: ${(total).toFixed(2)}</p>
    </div>
  )
}

export default Resultado;