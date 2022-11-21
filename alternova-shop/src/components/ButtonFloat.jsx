import React from "react";
import styled from "styled-components";

const ButtonFloat = ({ label, ...props }) => {
  return (
    <Container {...props}>
      <div className="btn">{label}</div>
    </Container>
  );
};

export default ButtonFloat;

const Container = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: var(--color-White);
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50px;
    background-color: var(--color-principal2);
    color: var(--color-White);
  }
`;
