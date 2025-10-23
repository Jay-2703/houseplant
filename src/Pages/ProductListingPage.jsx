// src/pages/ProductListingPage.jsx
import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import plants from '../data/plants'; // Import plants data

export default function ProductListingPage() {
  const categories = ['Large Plants', 'Climbing Plants', 'Low Maintenance', 'Hanging Plants'];
  return (
    <div className="products-page">
      <Header />
      <div className="container">
        <h1 className="page-title">Our Collection</h1>
        {categories.map((category) => {
          const categoryPlants = plants.filter((p) => p.category === category);
          if (categoryPlants.length === 0) return null;
          return (
            <div key={category} className="category-section">
              <h2 className="category-title">{category}</h2>
              <div className="products-grid">
                {categoryPlants.map((plant) => (
                  <ProductCard key={plant.id} plant={plant} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}