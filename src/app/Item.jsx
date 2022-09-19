import React from 'react';

export const Item = ({data: {title, price, description, category, image, quantity }}) => {

  return <>
    <h1>{title}</h1>
    {/* <img src={image} alt={image} /> */}
    <p>{category}</p>
    <p>{description}</p>
    <p>{quantity}</p>
    <p>{price}</p>
  </>
} 
