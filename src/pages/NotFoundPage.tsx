import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

function NotFoundPage() {
  return (
    <NotFoundStyle>
      <Header />
        <h1>404 - Página Não Encontrada</h1> 
      <Footer />
    </NotFoundStyle>
  );
}

export default NotFoundPage;

const NotFoundStyle = styled.div`

    h1 {
        font-size: 80px;
        text-align: center;
        margin-top: 10vh;
    }

`;