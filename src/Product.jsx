import React from 'react'

const Product = ({product}) => {
  return (
    <div className='product'>
        <img src={product.api_featured_image} alt="Product image" className="product-image" />
        <div className="product-body">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <h4 className='product-price'>{product.price}$</h4>
        </div>
    </div>
  )
}

export default Product