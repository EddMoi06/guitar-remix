import imagen from '../../public/img/nosotros.jpg'
import style from '~/css/nosotros.css'

export function meta(){
  return([
      {title: 'GuitarLA - Nosotros'},
  ])
}

export function links(){
  return[
    {
      rel: 'stylesheet', href: style
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="nosotros contenedor">
        <h2 className="heading"> Nosotros </h2>

        <div className="contenido">

          <img src={imagen} alt="Imagen Nosotros" />

          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis ad voluptas quibusdam, amet voluptatum necessitatibus tempore nostrum ut eligendi molestias suscipit esse? Esse tempore velit minima. Amet, consequatur velit.</p>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem perspiciatis ad voluptas quibusdam, amet voluptatum necessitatibus tempore nostrum ut eligendi molestias suscipit esse? Esse tempore velit minima. Amet, consequatur velit.</p>
          </div>

        </div>
    </main>
  )
}

export default Nosotros
