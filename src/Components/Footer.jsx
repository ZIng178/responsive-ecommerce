import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1``;
const Desc = styled.p``;
const SocialContainer = styled.div``;
const SocialIcon = styled.div``;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> Hamro Bazaar</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          perspiciatis dicta quibusdam suscipit consequuntur! Delectus magni
          deleniti a sunt dolores magnam iste adipisci ducimus error
          necessitatibus! Necessitatibus unde autem ex.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
