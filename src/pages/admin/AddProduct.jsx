import { useState } from 'react'
import styled from 'styled-components'
import {userRequest} from '../../requestMethods'

export const Container = styled.div`
    
`
export const Form = styled.form`
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    justify-content:center ;
background-color: whitesmoke ;
max-width: 500px;
padding: 20px 0 ;
border-radius:10px ;
`
export const FormTitle = styled.h3`
    margin-bottom:10px ;
`
export const Label = styled.label`
    align-self:flex-start ;
    margin-left: 50px ;
    font-size: 12px;
    margin-top:10px ;
    color:gray ;
`
export const Input = styled.input`
    padding: 5px ;
    width:80% ;
    margin: 5px 0 ;
    border:none ;
    border-bottom: 2px solid lightgray ;
    border-radius:5px ;
    outline:none ;
    /* font-size: 16px; */
`
export const TextArea = styled.textarea`
    width:80% ;
    margin-top:5px ;
    height: 70px;
    border:none ;
    border-bottom: 2px solid lightgray ;
    border-radius:5px ;
    outline:none ;
`
export const Button = styled.button`
margin-top:20px ;
font-size: 18px;
    padding:10px 50px ;
    font-weight: bold;
    background-color:gray ;
    color:white ;
    border-radius:10px ;
    cursor: pointer;
    &:hover{
        background-color:red ;
    }
`
const AddProduct = () => {
    const [inputs,setInputs] = useState({})
const [categories,setCat] = useState([])
const [color,setColor] = useState([])
const [size,setSize] = useState([])
const [success, setSuccess] = useState(false)

const handleChange = e =>{
setInputs(prev=>{
    return {...prev, [e.target.name]:e.target.value}
})
}

// const handleArrayInputs = e => {
// setArrayInputs(prev=>{
//     return [...prev, {[e.target.name]:e.target.value.split(',')}]
// })
// }

const handleSubmit = async(e) =>{
    e.preventDefault()

const product = {...inputs,categories,size,color}
console.log(product)
try {
 const res= await userRequest.post('/products',product)
 if(res.data){
     setSuccess(true)
 }
} catch (err) {
    console.log(err)
}
}

  return (
    <Container>
<Form onSubmit={handleSubmit}>
    <FormTitle>Add product details.</FormTitle>
    <Label>Add a title</Label>
    <Input placeholder='product title'  onBlur={handleChange} name='title' />
    <Label>Add a description</Label>
    <TextArea name='desc' placeholder='description' onBlur={handleChange}/>
    <Label>Add an image URL</Label>
    <Input name='img' placeholder='image url' onBlur={handleChange}/>
    <Label>Add Categories</Label>
    <Input name='categries' placeholder='men, women, jacket...' onBlur={e=>setCat(e.target.value.split(','))}/>
    <Label>Add sizes</Label>
    <Input name='size' placeholder='xs, s, m, l, xl' onBlur={e=>setSize(e.target.value.split(','))}/>
    <Label>Add colors</Label>

    <Input name='color' placeholder='white, blue, red...' onBlur={e=>setColor(e.target.value.split(','))}/>
    <Label>Add price</Label>
    <Input placeholder='30' name='price' type='number' onBlur={handleChange}/>
    <Label>Stock</Label>
<select name='inStock' defaultValue={true} onBlur={handleChange}>
    <option value='true'>Yes</option>
    <option value='false'>No</option>
</select>
{success && <p style={{color:'green',fontSize:'20px'}}>Product added successfully</p>}
    <Button type='submit'>Submit</Button>
</Form>

    </Container>
  )
}

export default AddProduct