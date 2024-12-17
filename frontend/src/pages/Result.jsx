import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState("/img/generate.jpg");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (prompt) {
      const image = await generateImage(prompt);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  const { generateImage } = useContext(AppContext);

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
            className="md:max-w-xs rounded-lg "
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
      {/* {!isImageLoaded && (
        <div className="flex w-full max-w-xl text-sm p-1 mt-5 rounded-full border border-gray-600">
        <textarea
          onChange={(e) => {
            setPrompt(e.target.value);
            // Auto-adjust height
            e.target.style.height = 'auto';
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          value={prompt}
          placeholder="Unleash your imagination here"
          className="flex-1 bg-transparent outline-none ml-8 resize-none overflow-hidden 
                     min-h-[50px] max-h-[150px] w-full"
          rows={1}
        />
        <button
          className="bg-black h-10 ml-2 text-green-100 px-10 sm:px-12 py-3 rounded-full text-white"
          type="submit"
        >
          Create
        </button>
      </div>
      )} */}

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl  text-sm p-1 mt-5  rounded-full border border-gray-600">
          <input
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
            type="text"
            placeholder="Unleash your imagination here"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
          />
          <button
            className="bg-black ml-2 text-green-100 px-10 sm:px-12 py-3 rounded-full text-white"
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
