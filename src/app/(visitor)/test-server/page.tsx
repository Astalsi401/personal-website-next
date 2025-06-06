import { serverFetch } from "@/data/server";

export default async function TestServerPage() {
  const products = await serverFetch.test.products();
  return (
    <div>
      {products.products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
