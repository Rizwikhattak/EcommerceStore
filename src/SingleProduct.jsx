import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "./Context/ProductContext";
import ProductNavigation from "./Components/ProductNavigation";
import FormatPrice from "./Helpers/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./Components/Star";
import ImagesChanger from "./Components/ImagesChanger";
import AddToCart from "./Components/AddToCart";
const url = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
  const { id } = useParams();
  console.log({ id });
  const { singleProduct, getSingleProduct, isSingleLoading } = useProduct();

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

  if (isSingleLoading) {
    return <h1 className="text-4xl py-20">Loading...</h1>;
  }

  return (
    <>
      <div className="title py-20">
        <ProductNavigation title={name} />
      </div>
      <section className="p-10 lg:px-44 grid grid-cols-1 lg:grid-cols-2">
        <div className="images-container">
          <ImagesChanger images={image} />
        </div>
        <div className="single-prod">
          <div className="single-prod-content space-y-2">
            <h1 className="text-xl">{name}</h1>
            <p>{<Star stars={stars} reviews={reviews} />}</p>

            <p>
              MRP: <del>{<FormatPrice price={price + 25000} />}</del>{" "}
            </p>
            <p className=" text-blue-500">
              Deal of the day: {<FormatPrice price={price} />}
            </p>
            <p>{description}</p>
            <div className="company-logos flex justify-between items-center align-middle">
              <div className="logo-1 flex items-center justify-center flex-col">
                <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-full">
                  <TbTruckDelivery className="h-5 w-5" />
                </div>

                <p className=" text-xs">Free Delivery</p>
              </div>
              <div className="logo-2 flex items-center justify-center flex-col">
                <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-full">
                  <TbReplace className="h-5 w-5" />
                </div>

                <p className=" text-xs">30 Days Replacement</p>
              </div>
              <div className="logo-3 flex items-center justify-center flex-col">
                <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-full">
                  <TbTruckDelivery className="h-5 w-5" />
                </div>

                <p className=" text-xs"> Product Delivered</p>
              </div>
              <div className="logo-4 flex items-center justify-center flex-col">
                <div className="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-full">
                  <MdSecurity className="h-5 w-5" />
                </div>

                <p className=" text-xs">2 year waranty</p>
              </div>
            </div>
            <p>
              Avalaible:
              <span className="font-bold">
                {stock > 0 ? "In Stock" : "Not Avalaible"}
              </span>
            </p>
            <p>
              ID:
              <span className="font-bold">{alias}</span>
            </p>
            <p>
              BRAND:
              <span className="font-bold">{company}</span>
            </p>
          </div>
          <hr className=" my-3 h-[2px] text-black bg-black" />
          {stock > 0 && (
            <div className="cart">
              <AddToCart singleProduct={singleProduct} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
