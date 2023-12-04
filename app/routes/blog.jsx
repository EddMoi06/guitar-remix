
import { useLoaderData } from '@remix-run/react'
import { getPosts } from "../models/posts.server";
import Posts from '../components/posts';
import style from '../css/blog.css'

export async function loader(){

  const posts = await getPosts()
  return posts.data
}

export function meta(){
  return([
    {
      title: `GuitarLA - Blog`
    }
  ])
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: style
    }
  ]
}

const Blog = () => {

  const posts = useLoaderData()

  return (
    <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className="blog">
          {posts.map( post => (
            <Posts
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
    </main>
  )
}

export default Blog
