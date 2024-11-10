import React from "react";
import networkDiagram from "../assets/1542298796.jpg";
import feature2 from "../assets/work culture.png";
import earth from "../assets/earth.png";

export default function ImageSection() {
  return (
    <div className="py-16">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={feature2}
              alt="Feature Illustration"
              className="object-cover rounded-lg "
            />
          </div>

          {/* Text Section */}
          <div className="text-left">
            <h2 className="mb-0 text-4xl font-bold leading-tight md:text-8xl lg:text-6xl">
              Features <span className="text-orange-400">Ought </span>
              to Partake
            </h2>
          </div>
        </div>

        {/* Additional Images Section */}
        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2">
          <img
            src={networkDiagram}
            alt="Additional Feature 1"
            className="object-cover w-full rounded-lg"
          />
          <img
            src={earth}
            alt="Additional Feature 2"
            className="object-cover w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
