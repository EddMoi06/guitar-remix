import { useState, useEffect } from 'react';
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    Link
} from '@remix-run/react'
import style from '~/css/app.css';
import Header from '~/components/header';
import Footer from '~/components/footer';
import { json } from '@remix-run/node';

export function meta(){
    return([
        {charset: 'UTF-8'},
        {title: 'GuitarLA - Remix'},
        {viewport: 'width=device-width, initial-scale=1'}
    ])
}

export function links(){
    return [
        { rel:'stylesheet', href:'https://necolas.github.io/normalize.css/8.0.1/normalize.css'},
        { rel:"preconnect", href:"https://fonts.googleapis.com"},
        { rel:"preconnect", href:"https://fonts.gstatic.com", crossOrigin: 'true'},
        { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"},
        { rel:'stylesheet', href: style }
    ]
}

export default function app(){
    const carritoLS = typeof window !== 'undefined' ?  JSON.parse(localStorage.getItem('carrito')) ?? [] : null;
    const [carrito, setCarrito] = useState(carritoLS)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const agregarCarrito = guitarra => {

        const existe = carrito.some(guitarraState => guitarraState.id === guitarra.id)

        if(existe){
            const guitarraExiste = carrito.map( guitarraState => {
                if(guitarraState => guitarraState.id === guitarra.id){
                    guitarraState.cantidad = guitarra.cantidad;
                }

                return guitarraState
            })
            setCarrito(guitarraExiste)
        }else{
            setCarrito([...carrito, guitarra])
        }
    }

    const actualizarCantidad = guitarra => {
        const guitarraAct = carrito.map( guitarraState => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad;
            }

            return guitarraState
        })
        
        setCarrito(guitarraAct)
    }

    const eliminarProducto = id => {
        const borrar = carrito.filter( guitarra => guitarra.id !== id)
        setCarrito(borrar)
    }

    return(
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarProducto
                }}
            
            />
        </Document>
    )
}

function Document({children}){

    return(
        <html lang="es">
            <head>
                <Links />
                <Meta />
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}

export function errorBoundary({error}){
    return(
        <Document>
            <p className='error'>{error.status}{error.statusText}</p>
        </Document>
    )
}