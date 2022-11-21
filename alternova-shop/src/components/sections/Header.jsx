import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo/logo-A.svg";

const Header = () => {
  return (
    <ContainerHeader>
      <img className="logo" src={logo} alt="logo A" />
      <h1>Alternova Shop</h1>
    </ContainerHeader>
  );
};

export default Header;

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-shadow: var(--box-shadow);
  .logo {
    width: 45px;
    margin: 0 1rem;
  }
  > h1 {
    color: var(--color-principal1);
  }
`;
