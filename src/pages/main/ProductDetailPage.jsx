import React from "react";
import Product from "../../components/product/Product";
import ProductDetail from "../../components/product/ProductDetail";
import PrestigeBuyer from "../../components/product/PrestigeBuyer";


const ProductDetailPage = () => {
  return (
    <div className="pt-[70px] w-full items-center justify-center flex flex-col gap-6">
      <div className="flex flex-row items-center justify-center w-full gap-6">
        <Product />
        <ProductDetail />
      </div>
      <PrestigeBuyer />
    </div>
  );
};

export default ProductDetailPage;
