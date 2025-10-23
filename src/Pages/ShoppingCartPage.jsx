// src/pages/ShoppingCartPage.jsx
import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import Header from '../components/Header';
import { useStore } from '../contexts/StoreContext';

export default function ShoppingCartPage() {
  const { state, dispatch } = useStore();
  const cartItems = Object.entries(state.cart);
  const total = cartItems.reduce((sum, [_, item]) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, [_, item]) => sum + item.quantity, 0);

  return (
    <div className="cart-page">
      <Header />
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <p className="empty-cart-text">Your cart is empty</p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = '#products';
              }}
              className="btn-primary"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map(([id, item]) => (
                <div key={id} className="cart-item">
                  <div className="cart-item-image">{item.image}</div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">${item.price} each</p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      onClick={() => dispatch({ type: 'DECREASE_QUANTITY', payload: { id } })}
                      className="btn-quantity"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      onClick={() => dispatch({ type: 'INCREASE_QUANTITY', payload: { id } })}
                      className="btn-quantity"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="cart-item-total">
                    <p className="item-total-price">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: { id } })}
                      className="btn-delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-summary">
              <h2 className="summary-title">Order Summary</h2>
              <div className="summary-row">
                <span className="summary-label">Total Items:</span>
                <span className="summary-value">{totalItems}</span>
              </div>
              <div className="summary-total">
                <span className="summary-total-label">Total:</span>
                <span className="summary-total-value">${total.toFixed(2)}</span>
              </div>
              <button className="btn-checkout">Coming Soon</button>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = '#products';
                }}
                className="btn-continue"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}