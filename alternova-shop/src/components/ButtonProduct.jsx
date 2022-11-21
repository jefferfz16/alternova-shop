import React, { useContext } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { UserContext } from "../pages/Principal";

const Button = ({
  label,
  data,
  quantity,
  setQuantity,
  initialStock,
  setInitialStock,
  ...props
}) => {
  const context = useContext(UserContext);
  /*destructuring data */
  const { name, unit_price } = data;
  const handlerBtn = () => {
    context.setItemCart([
      ...context.itemCart,
      {
        name: name,
        quantity: quantity,
        unitPrice: unit_price,
      },
    ]);
    setQuantity(0);
    setInitialStock(initialStock - quantity);
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
