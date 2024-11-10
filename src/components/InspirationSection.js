import React from "react";
import natureBg from "../assets/nature.jpg";

export default function InspirationSection() {
  return (
    <div className="relative py-4">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={natureBg}
            alt="Nature Background"
            className="object-cover w-full h-96"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto text-center text-white bg-black bg-opacity-40">
            <h2 className="mb-4 text-3xl font-bold">
              Every Inspiration from nature
            </h2>
            <p className="mb-6">
              Get started using our services with a 30-day free trial
            </p>
            <button className="px-6 py-2 text-white bg-black rounded-md hover:bg-gray-100">
              Try Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
