import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <>
      <div className="toggles flex gap-4">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <p className="text-sky-400">{amount}</p>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </>
  );
};

export default CartAmountToggle;
