import { Link, useLocation } from '@remix-run/react'
import imagenCarrito from '../../public/img/carrito.png'

const Navegacion = () => {

    const location = useLocation()
  return (
    <nav className="navegacion">
        <Link
            className={location.pathname === '/' ? 'pagina' : ''}
            to="/index"
        > Inicio </Link>
        <Link
            className={location.pathname === '/nosotros' ? 'pagina' : ''}
            to="/nosotros"
        > Nosotros </Link>
        <Link
            className={location.pathname === '/tienda' ? 'pagina' : ''}
            to="/tienda"
        > Tienda </Link>
        <Link
            className={location.pathname === '/blog' ? 'pagina' : ''}
            to="/blog"
        > Blog </Link>
        <Link
            to="/carrito"
        > <img src={imagenCarrito} alt='Imagen Carrito' className='carrito' /> </Link>
    </nav>
  )
}

export default Navegacion
