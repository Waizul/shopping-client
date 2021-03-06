import { useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mobile } from "../globalStyles/responsive";
import { login } from "../redux/apiCallls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  min-width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: rgb(10, 10, 100);
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  /* text-decoration: underline; */
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch();

  const from = location.state?.from?.pathname || '/'

  const handleInput = (e) => {
    e.preventDefault();
    const userCredentials = { username, password };
    login(dispatch, userCredentials,navigate,from);
  };
  
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onBlur={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type='password'
            onBlur={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleInput}>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
