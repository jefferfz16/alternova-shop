import React, { useContext } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { UserContext } from "../pages/Principal";

const Button = ({ label, order, setOrder, ...props }) => {
  const context = useContext(UserContext);
  const handlerBtn = () => {
    let item = context.itemCart.map((item, index) => {
      return {
        product: {
          name: item.name,
          unit_price: item.unitPrice,
        },
        quantity: item.quantity,
        totalProduct: item.quantity * item.unitPrice,
      };
    });
    let totalProduct = context.itemCart.reduce(
      (a, b) => (a = a + b.quantity),
      0
    );
    let totalOrder = item.reduce((a, b) => (a = a + b.totalProduct), 0);
    let Order = {
      items: item,
      totalProduct: totalProduct,
      totalOrder: totalOrder,
    };
    console.log("order", Order);
    context.setItemCart([]);
    setOrder(true);
  };
  return (
    <Btn disabled={props.disabled} onClick={handlerBtn} {...props}>
      {props.icon && <FiPlus />}
      <p>{label}</p>
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: var(--color-principal2);
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  border: 0;
  border-radius: 50px;
  color: var(--color-White);
  > p {
    margin-left: 0.5rem;
    white-space: nowrap;
    &::selection {
      background: transparent;
    }
  }
  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    > p {
      text-decoration: ${(props) => (props.disabled ? "none" : "underline")};
    }
  }
`;
