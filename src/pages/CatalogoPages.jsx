import React from "react";
import Catalogo from "../components/Catalogo";
import NavBar from "../components/NavBar";
import NavBarPrincipal from "../components/NavBarPrincipal";
import CasualPage from "./CasualPage";

const CatalogoPages = () => {
  return (
    <>
      <NavBarPrincipal />
      <NavBar />
      <Catalogo/>
    </>
  );
};

export default CatalogoPages;
