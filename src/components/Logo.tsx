import React from "react";
import { Link } from "react-router";
import { FaBook } from "react-icons/fa";
// import { IoPartlySunny } from "react-icons/io5";

export default function Logo({ collapsed }: { collapsed?: boolean }) {
  return (
    <Link to="/" className={`flex items-center justify-center gap-2 px-4}`}>
      <div
        className={`bg-violet-600 px-[1vw] py-[0.2vw] text-white font-bold rounded-2xl flex items-center gap-[0.5vw]`}
      >
        <FaBook strokeWidth={3} className="text-[1vw]" />
        <div className="font-bold text-white uppercase text-[1vw]">LMS</div>
      </div>
      {/* {!collapsed && (
        <div>
          <div className="font-bold text-violet-600 uppercase text-[2vw]">
            LMS
          </div>
        </div>
      )} */}
    </Link>
  );
}
