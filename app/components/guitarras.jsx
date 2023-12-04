import { Link } from '@remix-run/react'

const Guitarras = ({guitarra}) => {
    const {nombre, precio, imagen, descripcion, url} = guitarra.attributes;

    return (
        <div>
            <div className="guitarra">
                <img src={imagen.data.attributes.formats.small.url} alt={`Imagen Guitarra ${nombre}`} />
                
                <div className="contenido">
                <h3>{nombre}</h3>
                    <p className="descripcion">{descripcion}</p>
                    <p className='precio'>${precio}</p>
                    <Link className='enlace' to={`/guitarras/${url}`}>ver producto</Link>
                </div>
            </div>
        </div>
    )
}

export default Guitarras
