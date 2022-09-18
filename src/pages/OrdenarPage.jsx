import React from "react";
import NavBar from "../components/NavBar";
import NavBarPrincipal from "../components/NavBarPrincipal";
import Ordenar from "../components/Ordenar";

const OrdenarPage = () => {
  return (
    <>
      <NavBarPrincipal />
      <NavBar />
      <Ordenar/>
    </>
  );
};

export default OrdenarPage;
