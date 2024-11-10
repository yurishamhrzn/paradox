import React from "react";
import feature1 from "../assets/original.jpg";

export default function FutureSection() {
  return (
    <div className="py-16 bg-blue-50">
      <div className="relative w-full px-4">
        {/* Container for image and text */}
        <div className="relative w-full">
          <img
            src={feature1}
            alt="Building the future"
            className="object-cover w-full "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-black md:text-5xl">
              Building the future
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
