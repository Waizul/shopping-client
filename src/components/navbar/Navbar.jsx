import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { StyledLink } from "../../globalStyles/globalStyles";

import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  NavItem,
  NavMenu,
  Right,
  SearchContainer,
  Icon,
} from "./navbarStyle";
import { useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const quantity = useSelector((state) => state.cart.quantity);

  const handleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <Container>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input placeholder="Search" />
          <SearchIcon />
        </SearchContainer>
      </Left>
      <Center>
        <StyledLink to="/">
          <Logo>ShopingBD</Logo>
        </StyledLink>
      </Center>
      <Right>
        <NavMenu isMobile={isMobile}>
          <NavItem>
            <StyledLink to="/categories">Categories</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/register">Register</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/login">Log In</StyledLink>
          </NavItem>
        </NavMenu>

        <StyledLink to="/cart">
          <Badge badgeContent={quantity} color="primary">
            <Icon>
              <ShoppingCartOutlinedIcon />
            </Icon>
          </Badge>
        </StyledLink>
        <Icon onClick={handleMobile}>
          <MenuIcon className="menu"/>
        </Icon>
      </Right>
    </Container>
  );
};

export default Navbar;
