import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const ListViewProducts = ({ products }) => {
  console.log("Pr :", products);
  return (
    <>
      <section className="list-view-products flex flex-col gap-y-4 h-full w-full">
        {products.map(
          ({ id, image, category, name, price, description }, index) => {
            return (
              <NavLink to={`/SingleProduct/${id}`}>
                <div className=" product w-full p-10 flex gap-10 bg-slate-50 relative overflow-hidden group border-gray-400 border-[1px] ">
                  <figure className="relative w-[80%] overflow-hidden group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </figure>
                  <div className="content flex flex-col">
                    <p>{name}</p>
                    <p className="text-sky-400">
                      {<FormatPrice price={price} />}
                    </p>
                    <p>{description.slice(0, 90)}...</p>
                    <NavLink to={`/SingleProduct/${id}`}>
                      <button className="py-2 my-3 px-5 text-white bg-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white hover:text-blue-500 transition-colors rounded-md">
                        Read More
                      </button>
                    </NavLink>
                  </div>
                  <div className=" w-[19rem] h-full bg-[#1f3d4738]  group-hover:left-0 absolute top-0 left-[-100%] transition-all ease-in duration-100 z-30 "></div>
                </div>
              </NavLink>
            );
          }
        )}
      </section>
    </>
  );
};

export default ListViewProducts;
