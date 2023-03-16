import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { getProduct } from '../redux/productReducer.js/action';

let initialval = {
  title : "",
  image : "",
  price : "",
  brand : "",
  discount : "",
  gender : ""
}

export const Admin = () => {
  const [product, setProduct] = useState(initialval);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    //console.log(e)
    const {name, value} = e.target;
    setProduct((prev)=>{
      return {...prev, [name] : value}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product)
    dispatch(getProduct(product))
    setProduct(initialval)
  }

  return (
    <DIV>
        <h2>Add Products</h2>
        <form onSubmit={handleSubmit}>
          <input 
            name='title'
            type="text" 
            onChange={(e)=> handleChange(e)} 
            value={product.title}  
            placeholder='Title' />

          <input 
            name='image'
            type="text" 
            onChange={(e)=> handleChange(e)} 
            value={product.image} 
            placeholder='image' />

          <input 
            name='price'
            type="text" 
            onChange={(e)=> handleChange(e)} 
            value={product.price} 
            placeholder='Price' />

          <input 
            name='brand'
            type="text" 
            onChange={(e)=> handleChange(e)} 
            value={product.brand}
            placeholder='Brand' />

          <input 
            name='discount'
            type="text" 
            onChange={(e)=> handleChange(e)} 
            value={product.discount} 
            placeholder='Discount' />

          <select name="gender" value={product.gender} onChange={(e)=> handleChange(e)} id="">
            <option value="">Select Gender</option>
            <option value="male">Men</option>
            <option value="female">Women</option>
            <option value="kids">Kids</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
    </DIV>
  )
};

const DIV = styled.div`
    width:400px;
    margin: auto;
    border : 1px solid grey;
    padding : 20px;

    form {
        display:flex;
        flex-direction: column;
        gap:15px;
        align-items:center;

    }
    
    input{
        width:80%;
        height:40px;
        font-size:large;
    }
    button{
        width:20%;
        height:35px;
    }
    select{
      width : 50%;
      height : 30px;
      font-size : large;
    }
`;
