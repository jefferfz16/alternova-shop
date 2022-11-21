import React from "react";
import styled from "styled-components";
import { MdContentPasteOff, MdDoneAll } from "react-icons/md";

const WithOutData = ({ label, color }) => {
  return (
    <Container color={color}>
      {color ? <MdDoneAll /> : <MdContentPasteOff />}
      <p>{label}</p>
    </Container>
  );
};

export default WithOutData;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  border-radius: 8px;
  align-items: center;
  background-color: ${(props) =>
    props.color ? props.color : "var(--color-Back)"};
  > p {
    margin: 0 0.5rem;
  }
  > svg {
    height: 24px;
    width: 24px;
  }
`;
