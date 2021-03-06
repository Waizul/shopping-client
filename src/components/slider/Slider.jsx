
import  ArrowLeftOutlinedIcon  from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import {sliderItems} from '../../data'
import { ListItemSecondaryAction } from "@mui/material";
import { useState } from "react";
import { Arrow, Button, Container, Desc, Image, ImgContainer, InfoContainer, Slide, Title, Wrapper } from "./sliderStyle";


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
