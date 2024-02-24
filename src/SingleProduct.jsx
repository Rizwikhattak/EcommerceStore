import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "./Context/ProductContext";
import ProductNavigation from "./Components/ProductNavigation";

const url = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { id } = useParams();
  console.log({ id });
  const { singleProduct, getSingleProduct } = useProduct();

  const {
    id: alias,
    name,
    price,
    company,
    colors,
    description,
    image,
    reviews,
    shipping,
    stars,
    stock,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${url}?id=${id}`);
  }, []);
  return (
    <>
      <section className="h-screen py-40">
        <div className="title">
          <ProductNavigation title={name} />
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
