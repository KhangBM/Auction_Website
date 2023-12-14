import React from "react";
import Product from "../../components/product/Product";
import ProductDetail from "../../components/product/ProductDetail";
import PrestigeBuyer from "../../components/product/PrestigeBuyer";
import DescriptionProduct from "../../components/product/DescriptionProduct";

const ProductDetailPage = () => {
  return (
    <div className="pt-[120px] w-full items-center justify-center flex flex-col gap-6">
      <div className="flex flex-row items-center justify-center w-full gap-6">
        <Product />
        <ProductDetail />
      </div>
      <DescriptionProduct />
      <PrestigeBuyer />
    </div>
  );
};

export default ProductDetailPage;