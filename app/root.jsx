import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload
} from '@remix-run/react'
import style from '~/css/app.css';
import Header from '~/components/header';

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

    return(
        <Document>
            <Outlet/>
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
                <Scripts/>
                <LiveReload/>
            </body>
        </html>
    )
}