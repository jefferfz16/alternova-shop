import React from "react";
import styled from "styled-components";
import { Data } from "../../data/data";
import CardProduct from "../cardProduct";

const Products = ({ setCartData }) => {
  return (
    <Container>
      <h3>Product List</h3>
      <div className="containerProducts">
        {Data.products.map((data, index) => {
          return (
            <CardProduct setCartData={setCartData} key={index} data={data} />
          );
        })}
      </div>
    </Container>
  );
};

export default Products;

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.8rem 2rem 0.8rem;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  @media (max-width: 1023px) {
    min-height: fit-content;
    padding: 0.8rem 1rem 0.8rem;
  }
  > h3 {
    color: var(--color-principal1);
    margin: 0.5rem 0;
  }
  .containerProducts {
    display: flex;
    flex-wrap: wrap;
  }
`;
