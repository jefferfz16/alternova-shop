import React, { useState } from "react";
import styled from "styled-components";
import ImageBackground from "../assets/images/background-1.png";
import Button from "./ButtonProduct";
import Counter from "./Counter";

const CardProduct = ({ data }) => {
  /*destructuring data */
  const { name, unit_price, stock } = data;
  /*state quantity */
  const [quantity, setQuantity] = useState(0);
  const [initialStock, setInitialStock] = useState(stock);
  return (
    <Container>
      <Image src={ImageBackground} />
      <ContainerData>
        <h4 title={name}>{name}</h4>
        <div className="price">
          <p>stock: {initialStock}</p>
          <p>$ {unit_price}</p>
        </div>
        <div className="info">
          {stock !== 0 && (
            <Counter
              quantity={quantity}
              setQuantity={setQuantity}
              stock={initialStock}
            />
          )}
          <Button
            icon={true}
            data={data}
            quantity={quantity}
            setQuantity={setQuantity}
            initialStock={initialStock}
            setInitialStock={setInitialStock}
            label="Add to cart"
            disabled={quantity === 0}
          />
        </div>
      </ContainerData>
    </Container>
  );
};

export default CardProduct;

const Container = styled.div`
  width: calc(100% / 2 - 1rem);
  min-width: 280px;
  margin: 0.5rem;
  height: auto;
  background-color: var(--color-Back);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: 0.4s;
  height: fit-content;
  @media (max-width: 1439px) {
    width: calc(100% / 3 - 1rem);
    min-width: 200px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 150px;
  background: url(${(props) => props.src}) no-repeat center/cover;
`;

const ContainerData = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  > h4 {
    color: var(--color-principal1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
  }
  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.3rem;
    > p {
      font-size: 0.8rem;
      color: var(--color-Text);
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;
    @media (max-width: 1439px) {
      flex-direction: column;
    }
    > p {
      font-size: 0.8rem;
    }
  }
`;
