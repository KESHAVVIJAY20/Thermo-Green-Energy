import React, { useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import VisionCard from "../components/VisionCard";
import AOS from "aos";
// import ProductCard from "../components/ProductCard";
import products from "../data/Products";
import ProductCard from "../components/ProductCardd";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: true, // animation happens only once
    });
  }, []);
  return (
    <div>
      <HeroCarousel />
      <VisionCard />
      {/* <p className="text-2xl font-bold text-center mb-5">Our Products</p>
        <ProductCard/> */}
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-10">Our Products</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
