import React, { useState } from "react";

const Result = () => {
  const [image, setImage] = useState("/img/generate.jpg");
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const onSubmitHandle = async (e) => {};

  return (
    <form
      onSubmit={onSubmitHandle}
      className="flex flex-col min-h-[90vh] justify-center items-center "
    >
      <div>
        <div className="relative">
          <img
            src={image}
            alt="Generate Image"
            className="max-w-xs rounded-lg"
          />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-green-500 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            } `}
          />
        </div>
        <p
          className={
            !loading ? "hidden" : "text-green-600 opacity-70 text-sm mt-0.5"
          }
        >
          Manifesting....
        </p>
      </div>
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl  text-sm p-1 mt-5 rounded-full border border-gray-600">
          <input
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            type="text"
            placeholder="Unleash your imagination here"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
          />
          <button
            className="bg-black text-green-100 px-10 sm:px-12 py-3 rounded-full text-white"
            type="submit"
          >
            Create
          </button>
        </div>
      )}
      {isImageLoaded && (
        <div className="flex flex-wrap gap-2 justify-center text-black text-sm p-0.5 mt-5 rounded-full">
          <p
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="bg-transparent border border-gray-500 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Create Another
          </p>
          <a
            className="bg-black text-green-100 px-8 py-3 rounded-full cursor-pointer "
            href={image}
            download
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
