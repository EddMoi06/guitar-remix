import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '../models/guitarras.server'
import { getPosts } from '../models/posts.server'
import { getCurso } from '../models/curso.server'
import Guitarras from '../components/guitarras'
import Posts from '../components/posts'
import Curso from '../components/curso'
import styleGuitarra from '../css/guitarras.css'
import styleBlog from '../css/blog.css'
import styleCurso from '../css/curso.css'

export async function loader() {

  const [guitarras, post, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    post: post.data,
    curso: curso.data
  }
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styleGuitarra
    },
    {
      rel: 'stylesheet',
      href: styleBlog
    },
    {
      rel: 'stylesheet',
      href: styleCurso
    }
  ]
}

const Index = () => {

  const {guitarras, post, curso} = useLoaderData();
  const posts = post;

  return (
    <>
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

      <section>
        <Curso
          curso={curso.attributes}
        />
      </section>

      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className="blog">
          {posts.map( post => (
            <Posts
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
    </section>
    </>
  )
}

export default Index
