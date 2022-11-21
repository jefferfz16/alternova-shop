import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../pages/Principal";
import Button from "../ButtonOrder";
import ItemCart from "../ItemCart";
import WithOutData from "../WithOutData";
import { Container } from "./Products";

const Cart = () => {
  const context = useContext(UserContext);
  const [order, setOrder] = useState(false);
  return (
    <Container>
      <h3>My cart</h3>
      {context.itemCart.length === 0 ? (
        order ? (
          <WithOutData label="send order" />
        ) : (
          <WithOutData label="No product" />
        )
      ) : (
        <>
          <ContainerItems>
            <div className="head">
              <p>Name</p>
              <p>Quantity</p>
              <p>Unit</p>
              <p>Total</p>
            </div>
            {context.itemCart.map((it, index) => {
              return <ItemCart key={index} data={it} />;
            })}
          </ContainerItems>
          <Footer>
            <h3>
              $
              {context.itemCart.reduce(
                (a, b) => (a = a + b.quantity * b.unitPrice),
                0
              )}
            </h3>
            <Button
              order={order}
              setOrder={setOrder}
              icon={false}
              label="Crear Order"
            />
          </Footer>
        </>
      )}
    </Container>
  );
};

export default Cart;

const ContainerItems = styled.div`
  width: 100%;
  flex: 1;
  padding: 1rem;
  > div:first-child {
    margin-top: 0;
  }
  .head {
    display: flex;
    justify-content: space-between;
    flex-grow: 0.5rem;
    padding: 0.5rem 1rem;
    font-weight: 600;
    font-size: 1rem;
    color: var(--color-Text);
    > p {
      flex: 1;
      margin: 0 3px;
      text-align: right;
    }
    > p:first-child {
      flex: 2;
      text-align: left;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top: 1px solid var(--color-Text);
  padding: 1rem;
  > h3 {
    flex: 3;
  }
`;
