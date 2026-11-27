import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { OrbitProgress } from "react-loading-indicators";

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
  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 ? (
        products.map(function (product) {
          return <ProductCard product={product} />;
        })
      ) : (
        <OrbitProgress color="#32cd32" size="medium" text="" textColor="" />
      )}
    </div>
  );
}

// Step1: make a API call
// step2: store the API response in state variable
// Step3: using map method passing the each product data into child component as  a prop

// const result = false
// result ? console.log("success"): console.log("failure")
