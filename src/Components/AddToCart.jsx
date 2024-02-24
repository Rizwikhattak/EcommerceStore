import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
const AddToCart = ({ singleProduct }) => {
  const { id, colors, stock } = singleProduct;
  const [defColor, setDefColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  function setIncrease() {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }
  function setDecrease() {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }
  return (
    <>
      <div className="flex items-center">
        {colors.map((currElem) => {
          return (
            <button
              style={{ backgroundColor: currElem }}
              className={`rounded-full w-5 h-5 mx-1 cursor-pointer opacity-[0.5] hover:opacity-[1] ${
                currElem === defColor && "opacity-[1]"
              }`}
              onClick={() => setDefColor(currElem)}
            >
              {currElem === defColor && (
                <FaCheck
                  className={`${currElem === "#000000" && "text-white"} w-full`}
                />
              )}
            </button>
          );
        })}
      </div>
      <div className="cart-amount py-3">
        <CartAmountToggle
          amount={amount}
          setIncrease={setIncrease}
          setDecrease={setDecrease}
        />
      </div>
      <NavLink to="/Cart">
        <button className="py-2 px-5 text-white bg-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white hover:text-blue-500 transition-colors rounded-md">
          Add to Cart
        </button>
      </NavLink>
    </>
  );
};

export default AddToCart;
