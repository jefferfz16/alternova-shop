import React, { useState, createContext } from "react";
import styled from "styled-components";
import Cart from "../components/sections/Cart";
import Header from "../components/sections/Header";
import Products from "../components/sections/Products";
import { CartData } from "../data/data";

export const UserContext = createContext();

const Principal = () => {
  const [itemCart, setItemCart] = useState(CartData.products);
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
  height: calc(100vh - 77px);
  display: flex;
  overflow: auto;
  > div:first-child {
    border-right: 1px solid var(--color-Line);
  }
`;
