import Link from "next/link";
import styles from "../styles/NoEncontrado.module.css";

const NoEncontrado = () => {
  return (
    
      <div className={styles.noContrado}>
        <h1 className="heading">Pagina no encontrada</h1>
        <Link href="/">Volver al inicio</Link>
      </div>
    
  );
};

export default NoEncontrado;
