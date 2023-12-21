import React from 'react'
import Product from './Product';
import Footer from './Footer';

function Cart({cartProducts, onRemove}) {
  return (
    <div className="cart">
      <div className='products'>
          {cartProducts.length === 0 ? (
          <div className='noProducts'>
            <h1 className='noProductsInCart'>No products in cart</h1>
            </div>
        ) : (
          cartProducts.map(
            (p) => (
                <Product product={p} key={p.id} onRemove={onRemove} cart={1}/>
            )
        )
        )}
      </div>
    </div>
  )
}

export default Cart