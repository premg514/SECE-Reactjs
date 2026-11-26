import React, { useEffect, useState } from "react";
// https://github.com/premg514/SECE-Reactjs
export default function User() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function exceuting_async_code() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        setProducts(response.json());
        console.log("end");
      } catch (e) {
        console.log(e);
      }
    }
    exceuting_async_code();
  }, []);

  useEffect(function () {
    console.log("started"); //Mount stage execution

    return function () {
      console.log("closed"); //Unmount stage execution 
    };
  }, []);

  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}
