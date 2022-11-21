import React, { useState, createContext, useEffect } from "react";
import styled from "styled-components";
import ButtonFloat from "../components/ButtonFloat";
import Cart from "../components/sections/Cart";
import Header from "../components/sections/Header";
import Products from "../components/sections/Products";
import { CartData } from "../data/data";

export const UserContext = createContext();

const Principal = () => {
  const [itemCart, setItemCart] = useState(CartData.products);
  /*state view */

  return (
    <UserContext.Provider value={{ itemCart, setItemCart }}>
      <ContainerGeneral>
        <Header />
        <ContainerSections>
          <Products />
          <Cart />
        </ContainerSections>
      </ContainerGeneral>
    </UserContext.Provider>
  );
};

export default Principal;

const ContainerGeneral = styled.div`
  width: 100%;
  height: 100vh;
`;

const ContainerSections = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  overflow: auto;
  z-index: 98;
  margin-top: 3px;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
  > div:first-child {
    border-right: 1px solid var(--color-Line);
    @media (max-width: 1023px) {
      border-right: none;
      border-bottom: 1px solid var(--color-Line);
    }
  }
`;
