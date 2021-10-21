import styled from "styled-components";
import React from "react";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ width: "100%", fontSize: "11px", marginTop: "2px" })}
`;

const Announcements = () => {
  return <Container>Super Deal ! Free Shipping on Orders Over $50</Container>;
};

export default Announcements;
