import React from "react";

export default function Hero() {
  return (
    <div className="relative py-4 bg-gray-100 md:h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg sm:p-6">
          <div className="inline-block px-3 py-1 mb-4 text-white bg-red-600 rounded-md youtube-badge">
            YouTube Video
          </div>
          <div
            className="relative overflow-hidden"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/YQHsXMglC9A?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
