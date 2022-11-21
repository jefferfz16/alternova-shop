import React from "react";
import styled from "styled-components";

const ItemCart = ({ data }) => {
  /*destructing data */
  const { name, unitPrice, quantity } = data;
  return (
    <Item>
      <Container>
        <p className="bold">{name}</p>
        <p>{quantity}</p>
        <p>$ {unitPrice}</p>
        <p className="bold">$ {unitPrice * quantity}</p>
      </Container>
    </Item>
  );
};

export default ItemCart;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: var(--color-Red);
    height: 1.2rem;
    width: 1.2rem;
    margin-top: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-grow: 0.5rem;
  border: 1px solid var(--color-Text);
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.8rem;
  margin: 0.5rem 0;
  align-items: center;
  > p {
    flex: 1;
    margin: 0 3px;
    text-align: right;
  }
  > p:first-child {
    flex: 2;
    text-align: left;
  }
  .bold {
    font-weight: 600;
  }
`;
