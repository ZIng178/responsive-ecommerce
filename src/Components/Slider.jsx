import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background=color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {};
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://cdn.shopify.com/s/files/1/0417/8149/3912/products/wai-wai-chicken.png?v=1608566509" />
          </ImgContainer>
          <InfoContainer>
            <Title>DASAIN AND TIHAR SALE ON ALL TIMES </Title>
            <Description>
              Dont Wait !! Purchases above $100 gets a free box of Wai Wai ,
              above $50 gets a free Tropicana Orange Juice{" "}
            </Description>
            <Button> Shop Now !</Button>
          </InfoContainer>
        </Slide>

        <Slide>
          <ImgContainer>
            <Image src="https://cdn.shopify.com/s/files/1/0417/8149/3912/products/wai-wai-chicken.png?v=1608566509" />
          </ImgContainer>
          <InfoContainer>
            <Title>ALMOST LOSAR </Title>
            <Description>
              Dont Wait !! Purchases above $100 gets a free box of Wai Wai ,
              above $50 gets a free Tropicana Orange Juice{" "}
            </Description>
            <Button> Shop Now !</Button>
          </InfoContainer>
        </Slide>

        <Slide>
          <ImgContainer>
            <Image src="https://cdn.shopify.com/s/files/1/0417/8149/3912/products/wai-wai-chicken.png?v=1608566509" />
          </ImgContainer>
          <InfoContainer>
            <Title>GET READY FOR XMAS </Title>
            <Description>
              Dont Wait !! Purchases above $100 gets a free box of Wai Wai ,
              above $50 gets a free Tropicana Orange Juice{" "}
            </Description>
            <Button> Shop Now !</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
