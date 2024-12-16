import React, { useContext } from "react";
import { pricing } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Credit = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="rounded-full border border-gray-400 px-10 py-2 mb-6">
        Our Plans
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose your plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
        {pricing.map((price, index) => (
          <div
            key={index}
            className="bg-white text-gray-700 hover:scale-[1.03] transition-all duration-500 rounded-lg shadow-md p-6 sm:p-8 flex flex-col items-center justify-between"
          >
            <h3 className="text-lg font-semibold mb-3 text-center">
              {price.title}
            </h3>
            <p className="text-sm text-gray-500 mb-6 text-center">
              {price.description}
            </p>
            <p className="text-sm font-medium mb-4 text-center">
              <span className="text-xl">{price.price}</span>/{price.credits}{" "}
              credits
            </p>

            <button className="mt-3 px-8 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition">
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credit;
