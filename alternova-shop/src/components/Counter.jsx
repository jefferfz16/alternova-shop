import React from "react";
import styled from "styled-components";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";

const Counter = ({ stock, quantity, setQuantity }) => {
  const handlerMore = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const handlerLess = () => {
    if (quantity <= stock) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Container>
      <IoRemoveCircle
        className={quantity === 0 && "visibility"}
        onClick={quantity === 0 ? null : handlerLess}
      />
      <div className="quantity">{quantity}</div>
      <IoAddCircle
        className={quantity === stock && "visibility"}
        onClick={handlerMore}
      />
    </Container>
  );
};

export default Counter;

const Container = styled.div`
  flex: 1;
  min-width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 0.5rem;
  @media (max-width: 1439px) {
    justify-content: space-between;
    width: 100%;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-Text);
    &:hover {
      cursor: pointer;
      color: var(--color-principal2);
    }
  }
  .quantity {
    border: 1px solid var(--color-Text);
    border-radius: 5px;
    padding: 0.5rem;
    min-width: 40px;
    text-align: center;
    background-color: var(--color-White);
    @media (max-width: 1439px) {
      flex: 1;
      min-width: auto;
      margin: 0 0.5rem;
    }
    &::selection {
      background: transparent;
    }
  }
  .visibility {
    visibility: hidden;
  }
`;
