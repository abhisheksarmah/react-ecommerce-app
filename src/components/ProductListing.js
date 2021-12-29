import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import productsApi from "../api/productsApi";
import { setProducts } from "../redux/actions/productActions";

export default function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await productsApi
      .get("/products")
      .catch((err) => console.log("Err" + err));
    dispatch(setProducts(response.data));
  };

  const renderProductsList = products.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return <div className="ui grid container">{renderProductsList}</div>;
}
