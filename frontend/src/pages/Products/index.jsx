import { useEffect } from "react";
import { useState } from "react";
import { ClientForm } from "../../components/Clients/ClientForm";
import { ProductList } from "../../components/Products/ProductList";
import { ProductForm } from "../../components/Products/ProductForm";
import { Api } from "../../services/axios";

export const Products = () => {
  const [products, setProducts] = useState({});

  const getProducts = async (page) => {
    const url = `products?page=${page ?? 1}`;
    const result = await Api(url);
    setProducts(result.data);
  };

  useEffect(() => {
    getProducts();
  }, [products]);
  return (
    <>
      <div className="row">
        <h2>Produtos</h2>
        <ProductForm products={products} setProducts={setProducts} />
        <ProductList products={products} />
      </div>
    </>
  );
};
