import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col items-center my-20 py-12 ">
      <h1 className="text-3xl sm:text-4xl  mb-4 font-semibold ">
        See the magic. Try now
      </h1>

      <button
        onClick={() => navigate()}
        className="hover:scale-[1.02] transition-all sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2 flex items-center gap-2 rounded-full"
      >
        Create Magic
      </button>
    </div>
  );
};

export default CallToAction;
