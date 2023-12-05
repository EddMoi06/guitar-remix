import { useState, useEffect } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils/client-only'
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
    const [total, setTotal] = useState(0)
    const { carrito, actualizarCantidad, eliminarProducto } = useOutletContext();

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0)
        setTotal(calculoTotal)
    }, [carrito])

  return (
    <ClientOnly fallback={''}>
        {() => (
            <main className="contenedor">
                <h2 className="heading">Carrito de Compras</h2>

                <div className="contenido">
                    <div className="carrito">
                        <h2>Articulos</h2>

                        {carrito?.length === 0 ? 'Carrito Vacio' : (
                            carrito?.map( producto => (
                                <div key={producto.id} className='producto'>
                                    <div>
                                        <img src={producto.imagen} alt="Imagen Alternativa" />
                                    </div>

                                    <div>
                                        <p className="nombre">{producto.nombre}</p>
                                        <p>Cantidad:</p>

                                        <select
                                            value={producto.cantidad}
                                            className='select'
                                            onChange={e => actualizarCantidad({
                                                cantidad: +e.target.value,
                                                id: producto.id
                                            })}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>

                                        <p className='precio'>$ <span>{producto.precio}</span></p>
                                        <p className='subtotal'>Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
                                    </div>

                                    <button
                                        type='button'
                                        className='btn-eliminar'
                                        onClick={() => eliminarProducto(producto.id)}
                                    > Eliminar</button>
                                </div>
                            ))
                        )}
                    </div>

                    <aside className="resumen">
                        <h3>Resumen del Pedido</h3>
                        <p>Total a Pagar: ${total}</p>
                    </aside>
                </div>

                
            </main>
        )}
    </ClientOnly>
  )
}

export default Carrito
