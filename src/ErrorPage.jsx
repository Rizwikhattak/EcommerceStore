import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section className="Error Page mt-36 p-5 flex flex-col gap-4 items-center">
        <h1 className=" text-8xl font-bold">404</h1>
        <h1 className="text-4xl">UH OH! You're Lost</h1>
        <p>
          The page you are looking for doesnt exist.How you got here is a
          mystery.Click the button below to go back to HomePage.
        </p>
        <NavLink to="/">
          <button className="button px-5 py-2 bg-blue-500 hover:bg-blue-400 transition-colors text-white rounded-lg">
            Home
          </button>
        </NavLink>
      </section>
    </>
  );
};

export default ErrorPage;
