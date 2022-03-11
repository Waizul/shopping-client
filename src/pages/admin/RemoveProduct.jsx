import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {publicRequest} from '../../requestMethods'

const Container = styled.div`
margin:50px 10px ;
`
const Wrapper = styled.div`
  display:flex ;
  align-items:center ;
  justify-content:space-around ;
  gap: 20px;

`
const Image = styled.img`
  width:50px ;
  height:50px ;
  object-fit:cover ;

`
const Title = styled.h5`
`
const Price = styled.p`

`
const Button = styled.button`
  cursor: pointer;
padding: 5px 20px;
background-color:rgb(150,0,0) ;
color:white ;
border-radius:10px ;
border:none ;
&:hover{
  transform:scaleX(1.1) ;
  background-color:red ;
}
`
const RemoveProduct = () => {
  const [products, setProducts] = useState([])
  const [success,setSuccess] = useState(false)

  useEffect(()=>{
    const getProducts = async()=>{
      const res = await publicRequest.get('/products')
      setProducts(res.data)
    }
    getProducts()
  },[products])

  const handleRemove = async(id)=>{
    const res = await publicRequest.delete(`/products/find/${id}`)
    if(res.data){
      console.log('product deleted.')
      setSuccess(true)
    }
  }
  return (
    <Container>
      {products.map(product=>
        <>
        <Wrapper key={product._id}>
  <Image src={product.img} alt={product.title}/>
  <Title>{product.title}</Title>
  <Price>${product.price}</Price>  
  <Button onClick={()=>handleRemove(product._id)}>Remove</Button>     
          </Wrapper> 
        </>
        )}
    </Container>

  )
}

export default RemoveProduct