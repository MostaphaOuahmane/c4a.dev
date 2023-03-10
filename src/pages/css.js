import React from "react";
import Header from "../comp/header";
import MainCom from '../comp/MainCom'
import Footer from "../comp/footer";

export default function Css() {
  return (
    <>
      <Header/>
      <div>
        <MainCom pageName="Css page"/>
        <Footer/>
      </div>
    </>
  );
}
