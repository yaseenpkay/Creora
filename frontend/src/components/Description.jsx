import React from "react";

const Description = () => {
  return (
    <div className="flex flex-col">
      <div className="text-center items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 ">
          Create AI Magic
        </h1>
        <p className="text-lg text-gray-600 mb-8 ">
          Conjure your imaginations into reality
        </p>
      </div>

      <div className="text-sm flex flex-col md:flex-row items-center gap-5 px-6 sm:px-16 py-10 justify-between">
        {/* Right Text Section */}
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl sm:text-3xl  mb-4 text-gray-800">
            Introducing AI-Powered Creativity
          </h2>
          <p className=" text-gray-600 leading-relaxed mb-4">
            At Creora, we specialize in transforming your imagination into
            stunning visuals. Our cutting-edge AI technology turns simple text
            prompts into breathtaking images, allowing you to bring your
            creative ideas to life effortlessly. Whether you're an artist,
            designer, or just someone looking for inspiration, Creora makes the
            process magical and accessible.
          </p>
          <p className=" text-gray-600 leading-relaxed">
            With Creora, creating beautiful images has never been easier. Simply
            describe your vision, and our AI does the rest—quickly generating
            visuals tailored to your input. From concept to masterpiece, Creora
            empowers you to explore the endless possibilities of AI-driven
            creativity.
          </p>
        </div>
        {/* Left Image Section */}
        <div className="flex-shrink-0 w-52 lg:w-96">
          <img
            src="/img/description.jpg"
            alt="Creora in action"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
