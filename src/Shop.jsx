import React from 'react'
import Product from './Product';
import {useState, useEffect} from 'react';


function Shop({products, onAdd}) {
    const [visibleProducts, setVisibleProducts] = useState(16);
    const [searchedProducts, setSearchedProducts] = useState(products);

    useEffect(() => {
        setSearchedProducts(products);
    }, [products]);

    const showMoreProducts = () => {
        setVisibleProducts(visibleProducts + 16);
    };

    const searchProducts = (rec) => {
        const filteredProducts = products.filter((product) =>
          product.name.toLowerCase().includes(rec.toLowerCase())
        );
        setSearchedProducts(filteredProducts);
        setVisibleProducts(16);
    };

  return (
    <>
    <input className='search-bar'
        type="text"
        placeholder="Search products by name"
        onChange={(e) => searchProducts(e.target.value)}
    />
    <div className='products'>
        {searchedProducts !== null ? (
            <>
            {searchedProducts.slice(0, visibleProducts).map((p) => (
              <Product product={p} key={p.id} onAdd={onAdd} />
            ))}
            {visibleProducts < searchedProducts.length ? (
              <button onClick={showMoreProducts}>Show more products</button>
            ) : ""}
          </>
        ) : "No products"}
    </div>
    </>
  )
}

export default Shop