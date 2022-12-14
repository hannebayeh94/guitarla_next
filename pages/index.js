import Curso from "../components/Curso";
import Layout from "../components/Layout";
import Listado from "../components/Listado";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, curso, entradas }) {
  console.log("blog", entradas);
  return (
    <Layout pagina="Inicio" guitarra={guitarras[2]}>
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso curso={curso} />

      <section className="contenedor">
        <ListadoBlog entradas={entradas} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitarras = `${process.env.NEXT_PUBLIC_API_URL}/guitarras`;
  const urlCursos = `${process.env.NEXT_PUBLIC_API_URL}/cursos`;
  const urlBlog = `${process.env.NEXT_PUBLIC_API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog),
  ]);

  const [guitarras, curso, entradas] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json(),
  ]);

  return {
    props: {
      guitarras,
      curso,
      entradas,
    },
  };
}
