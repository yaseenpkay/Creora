import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CallToAction = () => {
  const { handleCreateClick } = useContext(AppContext);

  return (
    <div className=" flex flex-col items-center my-20 py-12 ">
      <h1 className="text-3xl sm:text-4xl  mb-4 font-semibold text-center">
        See the magic. <span className="text-green-600">Try now</span>
      </h1>

      <button
        onClick={handleCreateClick}
        className="hover:scale-[1.02] transition-all sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2 flex items-center gap-2 rounded-full"
      >
        Create Magic
        <img src="/img/crystal.png" alt="crystal" className="h-5" />
      </button>
    </div>
  );
};

export default CallToAction;
