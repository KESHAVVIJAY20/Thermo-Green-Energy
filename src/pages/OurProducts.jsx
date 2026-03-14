import React from "react";
import ProductCard from "../components/ProductCardd";
import products from "../data/Products";

export default function OurProducts() {
  return (
    <div className="text-center">
      <div
        className="relative w-full h-60 bg-cover bg-center flex items-center justify-center mb-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Center Text */}
        <h1 className="relative text-white text-4xl md:text-7xl font-bold">
          Our Products
        </h1>
      </div>
      {/* <ProductCard /> */}
      <div className="p-10">
        {/* <h1 className="text-3xl font-bold mb-10">Our Products</h1> */}

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
