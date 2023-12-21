import React from 'react'
import Product from './Product';

function Cart({cartProducts, onRemove}) {
  return (
    <div className='products'>
        {cartProducts.length === 0 ? (
        <p>No products in cart</p>
      ) : (
        cartProducts.map(
          (p) => (
              <Product product={p} key={p.id} onRemove={onRemove} cart={1}/>
          )
      )
      )}
    </div>
  )
}

export default Cart