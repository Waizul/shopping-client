import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import styled from "styled-components";

const Container = styled.div`
height:60px;
`
const Wrapper = styled.div`
padding: 10px 20px;
    display:flex;
align-items:center;
     justify-content:space-between;
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`

const Language = styled.span`
font-size:14px;
cursor:pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
border-radius:5px;
color:rgba(50,150,120,0.8);

`
const Input = styled.input`
font-size:18px;
padding-left:5px;
border:none;
outline:none;
`
const Center = styled.div`
flex:1;
text-align:center
`
const Logo = styled.h1`
    font-weight:bold;
color:rgb(50,150,120)
`
const Right = styled.div`
 flex:1; 
display:flex;
justify-content:flex-end;
`
const NavItem = styled.div`
width:max-content;
font-size:14px;
margin-left:25px;
cursor:pointer;
`
const Navbar = () => {
    return <Container>
        <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
            <Input/> 
           <SearchIcon/>
            </SearchContainer>
        </Left>
            <Center>
            <Logo>Shopping</Logo>
            </Center>
            <Right>
                <NavItem>REGISTER</NavItem>
                <NavItem>SIGN IN</NavItem>
                <NavItem>
                    <Badge badgeContent={ 4 } color='primary'>
                    <ShoppingCartOutlinedIcon/>
                    </Badge>
                </NavItem>
            </Right>
            </Wrapper>
    </Container>;
};

export default Navbar;
