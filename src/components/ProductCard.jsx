
import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-details">
        <h3>{product.title}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-footer">
          <span className="product-price">
            ${product.price}
          </span>

          <button className="add-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
