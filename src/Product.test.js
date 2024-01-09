import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Product from './Product';

describe('Product component', () => {
  const product = {
    id: 1,
    name: 'Sample Product',
    description: 'Product description',
    price: 10,
    price_sign: '$',
    api_featured_image: 'sample-image-url',
  };

  test('renders "Add to cart" button on shop page', () => {
    render(<Product product={product}  cart={0} />);
    const addToCartButton = screen.getByText('Add to cart');
    expect(addToCartButton).toBeInTheDocument();
  });

  test('renders "Remove from cart" button on cart page', () => {
    render(<Product product={product} cart={1} />);
    const removeFromCartButton = screen.getByText('Remove from cart');
    expect(removeFromCartButton).toBeInTheDocument();
  });

  test('calls onAdd function when "Add to cart" button is clicked', () => {
    const onAddMock = jest.fn();
    render(<Product product={product} onAdd={onAddMock} cart={0} />);
    const addToCartButton = screen.getByText('Add to cart');
    fireEvent.click(addToCartButton);
    expect(onAddMock).toHaveBeenCalledWith(product.id);
  });

  test('calls onRemove function when "Remove from cart" button is clicked', () => {
    const onRemoveMock = jest.fn();
    render(<Product product={product} onRemove={onRemoveMock} cart={1} />);
    const removeFromCartButton = screen.getByText('Remove from cart');
    fireEvent.click(removeFromCartButton);
    expect(onRemoveMock).toHaveBeenCalledWith(product.id);
  });

});
