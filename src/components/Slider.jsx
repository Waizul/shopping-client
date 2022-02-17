import styled from "styled-components";
import  ArrowLeftOutlinedIcon  from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import {sliderItems} from '../data'
import { ListItemSecondaryAction } from "@mui/material";
import { useState } from "react";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	${mobile({ height: '50vh' })}
`;
const Arrow = styled.div`
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
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;
const Wrapper = styled.div`
	/* height: 100%; */
	display: flex;
transition:all 1.5s ease;
transform: TranslateX(${ props=>props.slideIndex* -100}vw)
`;
const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
	${mobile({ height: '50vh' })}
`;
const ImgContainer = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 80%;
	object-fit: cover;
	${mobile({ height: '50%' })}
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
	${mobile({ flex: 0,display:'flex',flexDirection:'column',alignItems:'flex-start',width:'50vw', paddingLeft:'5px',position:'absolute',top:'20px',paddingTop:'0' })}
	${tablet({ flex: 0,position:'absolute' })};
`;
const Title = styled.h1`
	font-size: 70px;
	${mobile({fontSize:'20px',width:'80%'})}
	${tablet({fontSize:'30px',width:'80%'})}
`;
const Desc = styled.p`
color:gray;
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
	${mobile({fontSize:'14px',width:'80%',margin:'5px 0px', background:'transparent',letterSpacing:'1.5px'})}
	${tablet({fontSize:'14px',width:'80%',margin:'5px 0px',letterSpacing:'1.5px'})}
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
	${mobile({fontSize:'14px',width:'50%',padding:'2px 0px', margin:'10px 0px', letterSpacing:'1.5px'})}
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    
    const handleClick = (direction) => {
        if (direction === 'left') {
        setSlideIndex(slideIndex>0?slideIndex-1:2)
        } else {
        setSlideIndex(slideIndex<2? slideIndex+1:0)
        }
    };
    return (
		<Container>
			<Arrow direction='left' onClick={() => handleClick('left')}>
				<ArrowLeftOutlinedIcon />
			</Arrow>
            <Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide bg={item.bg} key={item.id}>
						<ImgContainer>
							<Image src={item.img} alt='' />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>SHOP NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction='right' onClick={() => handleClick('right')}>
				<ArrowRightOutlinedIcon />
			</Arrow>
		</Container>
	);
};

export default Slider;
