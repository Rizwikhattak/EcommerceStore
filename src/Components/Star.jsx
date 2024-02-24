import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
const StarComponent = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    const number = index + 0.5;
    return (
      <span>
        {stars >= index + 1 ? (
          <MdOutlineStar className=" text-yellow-500" />
        ) : stars >= number ? (
          <MdOutlineStarHalf className=" text-yellow-500" />
        ) : (
          <MdOutlineStarBorder className=" text-yellow-500" />
        )}
      </span>
    );
  });
  return (
    <>
      <div className="review-stars flex items-center">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
      </div>
    </>
  );
};

export default StarComponent;
