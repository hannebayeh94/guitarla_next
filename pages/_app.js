import "../styles/normalize.css";
import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    //Puesto que el useEffect se actualiza dos veces, la manera de controlarlo es verificar que solamente ingrese el carrito si efectivamente tiene productos, de esta manera evitamos que lo pase vacio, ya que nunca lo mete si la longitud es 0
    if (carritoLS.length !== 0) {
      setCarrito(carritoLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addCarrito = (producto) => {
    if (carrito.some((articulo) => articulo.id === producto.id)) {
      const carritoActualizado = carrito.map((articulo) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
      });

      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const actualizarCantidad = (producto) => {
    const carritoActualizado = carrito.map((articulo) => {
      if (articulo.id === producto.id) {
        articulo.cantidad = producto.cantidad;
      }
      return articulo;
    });

    setCarrito(carritoActualizado);
  };

  const eliminarProducto = (id) => {
    const carritoACtualizado = carrito.filter((articulo) => articulo.id !== id);
    setCarrito(carritoACtualizado);
  };

  return (
    <Component
      {...pageProps}
      eliminarProducto={eliminarProducto}
      carrito={carrito}
      addCarrito={addCarrito}
      actualizarCantidad={actualizarCantidad}
    />
  );
}

export default MyApp;
