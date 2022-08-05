import Image from "next/image";
import { useState } from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/Guitarra.module.css";

const Producto = ({ guitarra, addCarrito }) => {
  const { nombre, descripcion, precio, imagen, id } = guitarra;
  const [cantidad, setCantidad] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {

      alert('La cantidad debe ser mayor a 0');
      return;
      
    }

    //agregar al carrito
    const guitarraSeleccionada = {

      id,
      imagen: imagen.url,
      nombre,
      precio,
      cantidad
    
    }

    addCarrito(guitarraSeleccionada);
    
  };

  return (
    <Layout pagina={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={imagen.url}
          alt={`imagen guitarra ${nombre}`}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="">Cantidad: </label>
            <select
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">---Seleccione---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const urlGuitarra = `${process.env.NEXT_PUBLIC_API_URL}/guitarras?url=${url}`;
  const respuesta = await fetch(urlGuitarra);
  const guitarra = await respuesta.json();

  console.log(guitarra);

  return {
    props: {
      guitarra: guitarra[0],
    },
  };
}

export default Producto;
