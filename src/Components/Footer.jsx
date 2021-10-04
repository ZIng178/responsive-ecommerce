import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3``;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> MYTHIC</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          perspiciatis dicta quibusdam suscipit consequuntur! Delectus magni
          deleniti a sunt dolores magnam iste adipisci ducimus error
          necessitatibus! Necessitatibus unde autem ex.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE     ">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Mens Fashion</ListItem>
          <ListItem>Womans Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account </ListItem>
          <ListItem>Order Traching</ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title> Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          12345 Broadway , NY, NY 10013{" "}
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} />
          718987655
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: "10px" }} />
          contactmythic@Mythic.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
