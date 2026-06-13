import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    navigate(`/course-list/${input}`)
  };

  return (
    <form
      onSubmit={handleSubmit}
     className="flex w-full max-w-xl items-center rounded-full border border-gray-200 bg-white/95 pl-2 shadow-[0_12px_45px_rgba(0,0,0,0.12)] backdrop-blur-md"
    >
      <div className="flex items-center justify-center pl-4">
        <img src={assets.search_icon} alt="search" className="w-8 opacity-60" />
      </div>

      <input
        type="text"
        placeholder="What do you want to learn today?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full bg-transparent px-4 py-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-400 md:text-base"
      />

      <button
        type="submit"
        className="rounded-full bg-green-600 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 lg:hover:bg-green-700 0 active:scale-95 md:px-9 md:text-base"
      >
        Explore
      </button>
    </form>
  );
};

export default SearchBar;
