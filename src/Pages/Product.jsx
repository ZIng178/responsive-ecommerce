import { Button } from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button1 = styled.button`
  backgournd-color: white;
  padding: 15px;
  border: 2px solid teal;
  cursor: pointer;
  font-weight: 500;

  &hover:background-color:
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcements />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit </Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            blanditiis perferendis aut? Ab optio delectus magnam debitis est,
            beatae sequi adipisci incidunt ipsam aut soluta blanditiis facilis
            eaque ad ratione. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Qui alias sunt animi aperiam, soluta atque
            inventore impedit maxime doloribus fugit rerum nihil sequi esse.
            Alias quidem velit amet expedita numquam!
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle> Size:</FilterTitle>
              <FilterSize>
                <FilterSizeOption> XS</FilterSizeOption>
                <FilterSizeOption> S</FilterSizeOption>
                <FilterSizeOption> M</FilterSizeOption>
                <FilterSizeOption> L</FilterSizeOption>
                <FilterSizeOption> XL</FilterSizeOption>
                <FilterSizeOption> XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button1> Add to Cart </Button1>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
