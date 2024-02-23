import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = ({ id, image, category, name, price }) => {
  return (
    <NavLink to={`/SingleProduct/${id}`}>
      <div className="product p-3 bg-white  relative overflow-hidden group">
        <figure className="relative overflow-hidden w-300 h-200 group-hover:scale-105 transition-transform duration-200">
          <img src={image} className="w-full h-full object-cover" alt="" />
          <figcaption className="bg-white px-5 py-1 rounded-full absolute text-sky-400 z-10 top-2 right-2">
            {category}
          </figcaption>
        </figure>
        <div className="content flex justify-between items-center">
          <p>{name}</p>
          <p className="text-sky-400">{<FormatPrice price={price} />}</p>
        </div>
        <div className="w-full h-full bg-[#1f3d4738]  group-hover:left-0 absolute top-0 left-[-100%] transition-all ease-in duration-100 z-30 "></div>
      </div>
    </NavLink>
  );
};

export default Product;
