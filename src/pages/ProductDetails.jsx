import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        const data = await response.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <img src={products.image} alt="" />
      <p>{products.description}</p>
    </div>
  );
}
