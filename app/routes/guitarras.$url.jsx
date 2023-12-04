import { useState } from 'react'
import { useLoaderData, useOutletContext, Link } from "@remix-run/react"
import { getGuitarra } from '../models/guitarras.server'
import style from '../css/guitarras.css'
import { render } from 'react-dom'

export async function loader({params}){

    const {url} = params
    const guitarra = await getGuitarra(url)

    if(guitarra.data.length === 0){
        throw new Response('', {
            status:404,
            statusText: 'Guitarra no Encontrada'
        })
    }
    
    return guitarra
}

export function meta({data}){
  return([
    {
      title: `GuitarLA - ${data.data[0].attributes.nombre}`
    }
  ])
}
  

export function links(){
  return[
      {
          rel: 'stylesheet',
          href: style
      }
  ]
}

const GuitarraURL = () => {

    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData()
    const { nombre, descripcion, precio, imagen} = guitarra.data[0].attributes;
    const { agregarCarrito } = useOutletContext()

    const handleSubmit = e => {
      e.preventDefault()

      if(cantidad < 1){
        alert('Debes seleccionar una Cantidad')
        return
      }

      const guitarraSeleccionada = {
        id: guitarra.data[0].id,
        imagen: imagen.data.attributes.url,
        nombre,
        precio,
        cantidad
      }

      agregarCarrito(guitarraSeleccionada)
    }

    return (
      <>
            <div className="flex-final">
              <Link className='btn-volver' to={'/tienda'}>Volver</Link>
            </div>

            <div className="contenedor guitarra">
              <img src={imagen.data.attributes.url} alt={`Imagen Guitarra ${nombre}`} />

              <div className="contenido">
                  <h3>{nombre}</h3>
                  <p className="texto">{descripcion}</p>
                  <p className="precio">${precio}</p>

                  <form 
                    onSubmit={handleSubmit}
                    className="formulario"
                  >
                      <label htmlFor="cantidad">Cantidad</label>

                      <select 
                        onChange={e => setCantidad(+e.target.value)}
                        id="cantidad"
                      >
                        <option value="0">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                      <input 
                        type="submit"
                        value="Agregar al Carrito" 
                      />
                  </form>
              </div>
            </div>
      </>
    )
  }
  
  export default GuitarraURL