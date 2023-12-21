import React from 'react'

const Product = ({product, onAdd, onRemove, cart}) => {
  return (
    <div className='product'>
        <img src={product.api_featured_image} alt="Product image" className="product-image" />
        <div className="product-body">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <h4 className='product-price'>{product.price}{product.price_sign}</h4>
            {cart === 1 ? (<button onClick={() => onRemove(product.id)}>Remove from cart</button>) 
            : 
            (<button onClick={() => onAdd(product.id)}>Add to cart</button>)
             }
            
        </div>
    </div>
  )
}

export default Product