import { Link } from '@remix-run/react'
import { formatearFecha } from '../utils/index'

const Posts = ({post}) => {

  const {titulo, imagen, contenido, url, publishedAt} = post

  return (
    <article className="contenedor post">
        <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={'Imagen Alternativa'}/>
        <div className="contenido">
          <h3>{titulo}</h3>
          <p className='fecha'>{formatearFecha(publishedAt)}</p>
          <p className='resumen'>{contenido}</p>
          <Link to={`/post/${url}`} className='enlace'>Leer Post</Link>
        </div>
    </article>
  )
}

export default Posts
