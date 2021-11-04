import React from "react";
import styled from "styled-components";
import { logout } from "../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";
import { mobile } from "../responsive";
import { useHistory } from "react-router";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?cs=srgb&dl=pexels-wesley-carvalho-3622614.jpg&fm=jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;

  ${mobile({ width: "75%" })};
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;

  align-items: center;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-left:150px;
 

  &:disabled{
    color:green,
    cursor:not-allowed
  }
`;

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/login");
  };

  return (
    <Container>
      <Wrapper>
        <Title>YOU ARE LOGGED OUT </Title>

        <Button onClick={handleClick} disabled={isFetching}>
          Login
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Logout;
