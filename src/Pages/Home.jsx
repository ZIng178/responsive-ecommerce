import React from "react";
import Announcements from "../Components/Announcements";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import Slider from "../Components/Slider";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  ${mobile({
    width: "100%",
    fontSize: "11px",
    marginTop: "2px",
    padding: "0 10px",
  })}
`;
const Home = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Home;
