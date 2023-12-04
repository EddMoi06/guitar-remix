
import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '../models/guitarras.server'
import Guitarras from '../components/guitarras'
import style from '../css/guitarras.css'

export function meta(){
  return([
    {
      title: 'GuitarLA - Tienda'
    }
  ])
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href: style
    }
  ]
}

export async function loader(){

  const guitarras = await getGuitarras()

  return guitarras.data
} 

const Tienda = () => {

  const guitarras = useLoaderData()

  return (
    <main className='contenedor'>
      <h2 className="heading">Nuestra Coleccion</h2>

      {guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map( guitarra => (
            <Guitarras
              guitarra={guitarra}
              key={guitarra.id}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tienda
