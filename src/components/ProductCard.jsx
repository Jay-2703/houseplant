// src/components/ProductCard.jsx
import React from 'react';
import { useStore } from '../contexts/StoreContext';

export default function ProductCard({ plant }) {
  const { state, dispatch } = useStore();
  const isAdded = state.addedProducts.has(plant.id);

  return (
    <div className="product-card">
      <div className="product-image">{plant.image}</div>
      <div className="product-info">
        <h3 className="product-name">{plant.name}</h3>
        <p className="product-price">${plant.price}</p>
        <button
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { id: plant.id, plant } })}
          disabled={isAdded}
          className="btn-add-cart"
        >
          {isAdded ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}