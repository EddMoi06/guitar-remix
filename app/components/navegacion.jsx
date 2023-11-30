import { Link, useLocation } from '@remix-run/react'

const Navegacion = () => {

    const location = useLocation()
  return (
    <nav className="navegacion">
        <Link
            className={location.pathname === '/' ? 'pagina' : ''}
            to="/"
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
    </nav>
  )
}

export default Navegacion
