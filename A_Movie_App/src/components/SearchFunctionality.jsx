import React from "react";

const SearchFunctionality = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full flex justify-center">
      <input
        className="w-56 sm:w-72 md:w-80 px-3 py-2 border-2 border-blue-300 rounded-lg text-blue-600 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchFunctionality;
