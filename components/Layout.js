import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pagina, guitarra  }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {pagina}</title>
        <meta
          name="pagina de guitarras"
          content="Sitio web de ventas de guitarra"
        />
      </Head>
      <Header guitarra={guitarra}/>
      
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  guitarra: null
}

export default Layout;
