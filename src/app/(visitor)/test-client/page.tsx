"use client";

import { useEffect, useState } from "react";
import { clientFetch } from "@/data/client";
import type { Product } from "@/types";

export default function TestClientPage() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    (async () => {
      const { products } = await clientFetch.test.products();
      setProducts(products);
    })();
  }, []);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
