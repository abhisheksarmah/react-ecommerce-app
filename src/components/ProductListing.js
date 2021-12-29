import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../redux/actions/productActions";

export default function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const renderProductsList = products.map((product) => (
    <ProductCard product={product} key={product.id} />
  ));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return <div className="ui grid container">{renderProductsList}</div>;
}
