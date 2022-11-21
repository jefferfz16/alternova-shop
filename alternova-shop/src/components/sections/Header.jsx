import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo/logo-A.svg";

const Header = () => {
  return (
    <ContainerHeader>
      <img className="logo" src={logo} alt="logo A" />
      <h1>
        Alternova Shop<span>Jefferson Cepeda</span>
      </h1>
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
  z-index: 99;
  .logo {
    width: 45px;
    margin: 0 1rem;
  }
  > h1 {
    color: var(--color-principal1);
    display: flex;
    flex-direction: column;
    line-height: 1;
    > span {
      font-size: 0.8rem;
      color: var(--color-Text);
    }
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
`;
