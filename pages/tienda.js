import Link from "next/link";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

const Tienda = ({ guitarras }) => {
  return (
    <Layout pagina="Tienda">
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion</h1>
        <Listado guitarras={guitarras} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/guitarras`;
  const respuesta = await fetch(url);
  const guitarras = await respuesta.json();

  return {
    props: {
      guitarras,
    },
  };
}

export default Tienda;
