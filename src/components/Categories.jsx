import styled from "styled-components";
import { categories } from "../data";
import {mobile,tablet,laptop} from '../globalStyles/responsive'
import CategoryItem from "./CategoryItem";

const Container = styled.div`
margin-top:20px ;
	display: flex;
	flex-direction:column ;
	justify-content: space-between;
	${laptop({flexDirection:'row',gap:'20px',margin:'100px 50px'})}
	${tablet({ padding: '10px 5px', flexDirection: 'row',gap:'5px' })}
`;

const Categories = () => {
    return <Container>
    {categories.map(item=><CategoryItem item={item} key={item.id}/>)}
    </Container>;
};

export default Categories;
