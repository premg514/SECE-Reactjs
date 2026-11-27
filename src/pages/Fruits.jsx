import React from "react";
import { useParams } from "react-router-dom";

export default function Fruits() {
  const { fruitname } = useParams();
  return (
    <div>
      <h1>Fruits Page</h1>
      <h1>Fruits name: {fruitname}</h1>
    </div>
  );
}
