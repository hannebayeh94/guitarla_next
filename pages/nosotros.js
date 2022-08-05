import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout="responsive" width={600} height={450} alt="imagen" src="/img/nosotros.jpg"/>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
              ullam iusto eaque minus delectus vitae optio maxime itaque
              molestiae, eum blanditiis, molestias est natus! Qui quaerat
              voluptate rerum sed saepe! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eius vitae odit ex laudantium, molestias
              veritatis, magnam Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt cupiditate quas similique vitae
              dolorem, quam explicabo? Id vero voluptas, quibusdam possimus
              aliquid eum maiores placeat, expedita, magni reiciendis esse
              veritatis! accusamus deleniti officiis impedit molestiae dolore
              quam alias praesentium rerum ab libero consequuntur expedita.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
