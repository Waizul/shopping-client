import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import { mobile, tablet } from "../globalStyles/responsive";

const Container = styled.div`
 
`;

const Wrapper = styled.div`
padding-top:50px;
  display: flex;
  flex-direction:column ;
 justify-content:center ;
  ${tablet({ flexDirection: "column", paddingLeft: "10%" })}

`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: rgb(50, 150, 120);
 font-size: 30px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
 
  ${tablet({ justifyContent: "center" })}
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

const Title = styled.h3`
  margin-bottom: 30px;
`;

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

const Right = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: "#fff8f8";
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  .icon {
    margin-right: 10px;
  }
`;

const Payment = styled.img`
  width: 50%;
`;

const CopyRight = styled.p`
display: flex;
align-items: center;
justify-content: center;
	color: #666060;
	margin-bottom: 20px;
	&>span{
		color:rgb(50, 150, 120); 
	};
	.copyright{
		font-size: 14px;
		margin: 0 1px;
	}
`
const Footer = () => {
  return (
    <Container>
		<Wrapper>
      <Left>
        <Logo>ShoppingBD</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don???t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon className="icon" /> Road 2, Baridhara.
        </ContactItem>
        <ContactItem>
          <PhoneIcon className="icon" /> 01710000001
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon className="icon" />
          contact@shoppingbd.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
	  </Wrapper>
	  <CopyRight>All rights reserved to <CopyrightOutlinedIcon className="copyright"/> <span> shoppimgbd.com.</span></CopyRight>
    </Container>
  );
};

export default Footer;
