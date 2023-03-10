import React from "react";
import Header from "../comp/header";
import MainCom from "../comp/MainCom";
import Footer from "../comp/footer";

const Html = () => {
  return (
    <>
      <Header/>
      <div>
        <MainCom pageName="Html page"/>
        <Footer/>
      </div>
    </>
  );
};
export default Html;
