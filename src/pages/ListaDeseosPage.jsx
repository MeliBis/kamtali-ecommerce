import React from "react";
import NavBar from "../components/NavBar";
import NavBarPrincipal from "../components/NavBarPrincipal";

const ListaDeseosPage = () => {
  return (
    <>
      <NavBarPrincipal />
      <NavBar />
      <h3 className="container mt-4">enlazar productos que desean clientes</h3>
    </>
  );
};

export default ListaDeseosPage;
