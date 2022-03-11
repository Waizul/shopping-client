import styled from "styled-components";
import { laptop, mobile, tablet } from "../../globalStyles/responsive";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color:darkcyan ;
  color:white ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${laptop({ height: "60px", padding: "0 50px" })}
  ${tablet({ height: "50px", padding: "0 30px" })};
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Language = styled.span`
  display: none;
  font-size: 14px;
  cursor: pointer;
  ${laptop({ display: "inline" })}
  ${tablet({ display: "inline" })}
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 2px;
  border-radius: 5px;
  /* color: rgba(50, 150, 120, 0.8); */
  ${laptop({ padding: "5px" })}
  ${tablet({ padding: "3px" })}
`;

export const Input = styled.input`
  font-size: 14px;
  width: 100px;
  padding-left: 5px;
  border: none;
  outline: none;
  ${laptop({ width: "300px", fontSize: "20px" })}
  ${tablet({ width: "150px", fontSize: "16px" })};
`;

export const Center = styled.div`
  flex: 1;
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
  margin-left: 5%;
  ${laptop({ fontSize: "30px" })};
  ${tablet({ fontSize: "24px", margin: "0 5px" })};
`;

export const Logo = styled.h1`
  font-size: 20px;
  font-weight: bold;
  /* color: rgb(50, 150, 120); */
  ${tablet({ fontSize: "24px" })};
  ${laptop({ fontSize: "30px" })};
`;

export const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavMenu = styled.ul`
  /* color: ${(props) => (props.isMobile ? "white" : "black")}; */
  color:white ;
  display: ${(props) => (props.isMobile ? "flex" : "none")};
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  align-items: center;
  justify-content: space-evenly;
  height: 70vh;
  width: ${(props) => (props.isMobile ? "50vw" : "-50vw")};
  background-color: ${(props) =>
    props.isMobile ? "rgba(28,28,105)" : "inherit"};
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 3;
  & > li {
    /* border-bottom: ${(props) =>
      props.isMobile ? "2px solid rgb(28,28,105)" : "2px solid white"}; */
  }
  ${laptop({
    width: "100%",
    position: "static",
    display: "flex",
    justifyContent: "space-evenly",
    height: "60px",
    top: "0",
  })}
  ${tablet({
    width: "100%",
    position: "static",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    height: "60px",
    top: "0",
    fontSize: "18px",
    // color: "gray",
  })}
`;

export const NavItem = styled.li`
  list-style: none;
  width: max-content;
  &:hover {
    border-bottom: 2px solid red;
  }
`;

export const Icon = styled.div`
  color: white;
  cursor: pointer;
  ${tablet({ marginRight: "0" })};
  & > .menu {
    margin-left:10px ;
    margin-right:10px ;
    ${tablet({ display: "none" })}
  }
`;

export const Username = styled.span`
`
export const Button = styled.button`
padding:5px 10px ;
border-radius:5px ;
cursor: pointer;
border:none ;
&:hover{
  font-weight: bold;
}

`