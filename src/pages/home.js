import React from "react";
import Header from "../comp/header";
import MainCom from "../comp/MainCom";
import Footer from "../comp/footer";

export default function Home() {
  return (
    <>
      <Header /> 
      <MainCom pageName="Home Page" />
      <Footer/>
      
    </>
  );
}
