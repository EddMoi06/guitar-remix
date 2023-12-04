

const Curso = ({curso}) => {
    const {titulo, contenido, imagen} = curso;
  return (
    <section className="curso">
        <style jsx="true">{`
            .curso{
                background-image: linear-gradient(to right, rgb(0 0 0 / .5), rgb(0 0 0 /.7)), url(${imagen.data.attributes.url});
                background-repeat: no-repeat;
                background-size: cover;
            }
        `}</style>
        <div className="contenedor curso-grid">
            <div className="contenido">
                <h2 className="heading">{titulo}</h2>
                <p className="texto">{contenido}</p>
            </div>
        </div>
    </section>
  )
}

export default Curso
