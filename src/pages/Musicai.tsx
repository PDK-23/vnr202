// src/pages/Musicai.tsx
import React from "react";
import video from "../assets/1939-1945.mp4";

// Video summary placeholder: put your video file at /src/assets/video/summary.mp4
const videoSrc = video;

const Musicai: React.FC = () => {
  return (
    <div className="min-h-screen w-full pt-28 pb-12 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <div className="bg-white/95 border border-indigo-100 rounded-3xl shadow-2xl backdrop-blur-md p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">Video tóm tắt nội dung</h1>

          <div className="flex items-center justify-center">
            <video
              src={videoSrc}
              controls
              className="w-full max-w-4xl aspect-video object-cover rounded-lg shadow-lg bg-black"
              style={{ height: 'auto' }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musicai;
