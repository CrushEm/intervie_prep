import React, { FC } from 'react';
import { ProductItemType } from './ProductItem';

interface ProductDetailsProps {
  details: ProductItemType
}

function ProductDetails({ details }: ProductDetailsProps) {

  return (
    <div>
      <img src={details.imageURL} alt={details.name} />
      <h3>{details.name}</h3>
      <h4>{details.price}</h4>
      <h5>{details.category}</h5>
      <p>{details.description}</p>
    </div>
  )
}

export default ProductDetails;
