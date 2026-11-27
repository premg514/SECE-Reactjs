import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { OrbitProgress } from "react-loading-indicators";
import "./Products.css";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h1>Our Products</h1>

      {products.length > 0 ? (
        <div className="products-grid">
          {products.map(function (product) {
            return (
              <Link to={`/product/${product.id}`}>
                <ProductCard key={product.id} product={product} />
              </Link>
            );
          })}
        </div>
      ) : (
        <OrbitProgress color="#32cd32" size="medium" />
      )}
    </div>
  );
}
