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
    <ContainerCart>
      <h3>My cart</h3>
      {context.itemCart.length === 0 ? (
        order ? (
          <WithOutData
            color="var(--color-Correct)"
            label="Order sent successfully. (view in console)."
          />
        ) : (
          <WithOutData label="No products" />
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
    </ContainerCart>
  );
};

export default Cart;

const ContainerCart = styled(Container)`
  /*  @media (max-width: 1023px) {
    display: none;
  } */
`;

const ContainerItems = styled.div`
  width: 100%;
  flex: 1;
  padding: 1rem;
  @media (max-width: 1023px) {
    padding: 0;
  }
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
  @media (max-width: 1023px) {
    padding: 1rem 0;
  }
  > h3 {
    flex: 3;
  }
`;
