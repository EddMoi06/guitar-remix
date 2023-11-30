import React from 'react'
import Navegacion from './navegacion'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="contenedor contenido">
            <Navegacion/>

            <p className="copyrigth">Todos los Derechos Reservados {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer
