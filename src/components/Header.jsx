// src/components/Header.jsx
import React from 'react';
import { ShoppingCart, Home, Leaf } from 'lucide-react';
import { useStore } from '../contexts/StoreContext';

export default function Header() {
  const { state } = useStore();
  const cartCount = Object.values(state.cart).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <div className="header-content">
        <div className="header-title">
          <Leaf size={28} />
          <span>GreenHouse Plant</span>
        </div>
        <nav className="header-nav">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#products';
            }}
          >
            <Home size={20} />
            Products
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#cart';
            }}
            className="cart-icon-wrapper"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </a>
        </nav>
      </div>
    </header>
  );
}