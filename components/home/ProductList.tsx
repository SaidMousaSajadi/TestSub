"use client";

import { useEffect, useState } from "react";
import productsData from "@/data/products.json";
import ProductCard from "./ProductCard";


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export default function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {

      const hash = window.location.hash.replace("#", "");

      if (hash && productsData[hash as keyof typeof productsData]) {
        setFilteredProducts(productsData[hash as keyof typeof productsData]);
      } else {

        const allProducts = Object.values(productsData).flat();
        setFilteredProducts(allProducts);
      }
      setLoading(false);
    };

    handleHashChange();


    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (loading) return <div className="text-center">⏳</div>;

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No products found
          </h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your filters or search terms
          </p>
        </div>
      )}
    </div>
  );
}
