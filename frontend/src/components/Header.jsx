import React from "react";

const Header = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center my-10">
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white sm:px-6 px-4 py-1 text-xs sm:text-sm rounded-full border border-neutral-400">
        <p>Text To Image Generator For The Creatives</p>
      </div>
      <h1 className="  text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Turn <span className="text-green-600">Words</span> into Masterpieces
        with <span className="text-green-600">Creora.</span>
      </h1>
      <p className="text-center max-w-xl mx-auto mt-5">
        {" "}
        Unleash your imagination and let AI craft breathtaking visuals from your
        words, instantly.
      </p>

      <button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2 flex items-center gap-2 rounded-full">
        Create Magic
      </button>

      {/* <div>
        {Array(6)
          .fill("")
          .map((item, index) => {
            <img src={assets.sample_img} alt="" />;
          })}
      </div> */}
    </div>
  );
};

export default Header;
