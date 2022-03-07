import styled from "styled-components";
import { laptop, mobile, tablet } from "../../globalStyles/responsive";

export const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
export const Wrapper = styled.div`
  /* height: 100%; */
  display: flex;
  transition: all 1.5s ease;
  transform: TranslateX(${(props) => props.slideIndex * -100}vw);
`;
export const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  position: relative;
`;
export const ImgContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 60vw;
  height: 70vh;
  object-fit: cover;
  border-radius: 10px;
`;
export const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding: 10px;
`;
export const Title = styled.h1`
  font-size: 20px;
  color: rgb(10, 10, 155);
  ${tablet({ fontSize: "30px", width: "80%" })}
`;
export const Desc = styled.p`
  color: gray;
  font-size: 14px;
  width: 80%;
  margin: 20px 0px;
  font-weight: 500;
  letter-spacing: 2px;
  background: transparent;
  /* ${mobile({
    fontSize: "14px",
    width: "80%",
    margin: "5px 0px",
    background: "transparent",
    letterSpacing: "1.5px",
  })} */
  ${tablet({
    fontSize: "14px",
    width: "80%",
    margin: "5px 0px",
    letterSpacing: "1.5px",
  })}
`;
export const Button = styled.button`
  max-width: max-content;
  padding: 10px 20px;
  margin-top: 120px;
  color: rgb(20, 10, 10, 0.8);
  font-weight: bold;
  letter-spacing: 1px;
  border: 1px solid gray;
  font-size: 18px;
  background-color: transparent;
  cursor: pointer;
`;
