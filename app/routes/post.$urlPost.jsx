import { useLoaderData } from '@remix-run/react'
import { getPost } from '../models/posts.server'
import { formatearFecha } from '../utils/index'
import style from '../css/blog.css'


export async function loader({params}){

    const {urlPost} = params
    const post = await getPost(urlPost)

    return post
}

export function meta({data}){
    return([
      {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`
      }
    ])
}

export function links (){
    return [
        {
            rel: 'stylesheet',
            href: style
        }
    ]
}

const Blog = () => {

    const post = useLoaderData()
    const { contenido, titulo, imagen, publishedAt, url } = post.data[0].attributes;
    const imagenC = imagen.data.attributes.url;

  return (
    <article className="contenedor post mt-3">
        <img className="imagen" src={imagenC} alt={'Imagen Alternativa'}/>
        <div className="contenido">
          <h3>{titulo}</h3>
          <p className='fecha'>{formatearFecha(publishedAt)}</p>
          <p className='texto'>{contenido}</p>
        </div>
    </article>
  )
}

export default Blog
