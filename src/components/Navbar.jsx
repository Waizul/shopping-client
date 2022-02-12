import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink } from "../GlobalStyles";
import { laptop, mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 60px;
  width: 100%;
  ${mobile({ height: "50px" })};
  ${tablet({ height: "50px" })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })};
  ${tablet({ padding: "10px 15px" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 5px;
  color: rgba(50, 150, 120, 0.8);
`;
const Input = styled.input`
  font-size: 18px;
  padding-left: 5px;
  border: none;
  outline: none;
  ${mobile({ width: "56px", paddingLeft: "2px" })};
  ${tablet({ width: "100px" })};
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: rgb(50, 150, 120);
  ${mobile({ fontSize: "24px" })};
  ${tablet({ fontSize: "24px" })};
  ${laptop({ fontSize: "28px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  position: relative;
  ${mobile({ flex: 2, justifyContent: "center" })};
  ${tablet({ flex: 2 })};
`;
const NavItem = styled.div`
  width: max-content;
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  ${tablet({ fontSize: "12px", marginLeft: "10px" })};
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <StyledLink to="/">
            <Logo>Shopping</Logo>
          </StyledLink>
        </Center>
        <Right>
          <StyledLink to="/register">
            <NavItem>REGISTER</NavItem>
          </StyledLink>
          <StyledLink to="/login">
            <NavItem>LOG IN</NavItem>
          </StyledLink>
          <StyledLink to="/cart">
            <NavItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </NavItem>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
