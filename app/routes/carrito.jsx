import { useOutletContext } from '@remix-run/react'
import style from '~/css/carrito.css'

export function links(){
    return[
        {
            rel: 'stylesheet',
            href: style
        }
    ]
}

export function meta(){
    return([
        {
            title: 'GuitarLA - Carrito de Compras'
        }
    ])
}

const Carrito = () => {
    const { carrito } = useOutletContext();

    console.log(carrito)
  return (
    <main className="contenedor">
        <h2 className="heading">Carrito de Compras</h2>

        <div className="contenido">
            <div className="carrito">
                <h2>Articulos</h2>

                {carrito.length === 0 ? 'Carrito Vacio' : (
                    carrito.map( producto => (
                        <div key={producto.id} className='producto'>
                            <div>
                                <img src={producto.imagen} alt="Imagen Alternativa" />
                            </div>

                            <div>
                                <p className="nombre">{producto.nombre}</p>
                                <p className='cantidad'>{producto.cantidad}</p>
                                <p className='precio'>$ <span>{producto.precio}</span></p>
                                <p className='subtotal'>Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <aside className="resumen">
                <h3>Resumen del Pedido</h3>
                <p>Total a Pagar: $</p>
            </aside>
        </div>

        
    </main>
  )
}

export default Carrito
