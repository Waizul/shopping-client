import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../redux/apiCallls";
import { mobile, tablet } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 50%;
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
  flex-wrap: wrap;
  ${mobile({flexDirection:'column' })}
  ${tablet({flexDirection:'column' })}
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  margin-right: 10px;
`;

const Button = styled.button`
  max-width: 70%;
  margin-top: 10px;
  border: none;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgb(10, 10, 100);
  }
`;

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const fullName = `${fname} ${lname}`;
    if (password === password2) {
      const userInfo = {
        fullName,
        username,
        email,
        password,
      };
      register(dispatch, userInfo);

      navigate("/login");
    } else {
      window.alert("Passwords do not match.");
    }
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleRegister}>
            <Input
              placeholder="first name"
              required
              onBlur={(e) => setFname(e.target.value)}
            />
            <Input
              placeholder="last name"
              required
              onBlur={(e) => setLname(e.target.value)}
            />
            <Input
              placeholder="username"
              required
              onBlur={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="email"
              required
              onBlur={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              required
              onBlur={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="confirm password"
              type="password"
              required
              onBlur={(e) => setPassword2(e.target.value)}
            />

            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY.</b>
            </Agreement>
            <Button type="submit">CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
