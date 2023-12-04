export async function getPosts(){

    const url = `${process.env.API_URL}/posts?populate=imagen`
    const respuesta = await fetch(url)
    return await respuesta.json()

}

export async function getPost (url){
    const datos = `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
    const respuesta = await fetch(datos)
    return await respuesta.json()
}