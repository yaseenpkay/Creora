import React from "react";
import { testimonials } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className=" flex flex-col items-center my-20 py-12 ">
      <h2 className="text-3xl sm:text-4xl  mb-4 font-semibold ">
        Customer Testimonials
      </h2>
      <p className=" text-gray-600 leading-relaxed mb-10">
        What Our Users Are Saying
      </p>

      <div className="flex flex-wrap gap-5 gap-y-10">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 rounded-lg shadow-md  border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold mt-3">{item.name}</h2>
              <p className="text-gray-500 mb-4">{item.role}</p>
              {/* <div className="flex mb-4">
                {Array(item.rating)
                  .fill()
                  .map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="gold"
                      className="w-5 h-5"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
              </div> */}
              <p className="text-center text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
