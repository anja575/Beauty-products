import React from 'react'
import Product from './Product';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Shop() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');
                const nyxProducts = response.data.filter(product => product.brand === 'nyx' && product.description !== "" );
                setProducts(nyxProducts);
                console.log(nyxProducts);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        fetchProducts();
    }, []);

  return (
    <div className='products'>
        {products !== null ? products.map(
            (p) => (
                <Product product={p} key={p.id}/>
            )
        ) : "No products"}
    </div>
  )
}

export default Shop