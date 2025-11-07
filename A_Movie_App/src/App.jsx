import React, { useState } from "react";
import Movie from "./components/Movie";
import SearchFunctionality from "./components/SearchFunctionality";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col items-center gap-4 sm:gap-6">
        <SearchFunctionality
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 text-center">
          Movies Here
        </h1>
        <Movie searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default App;
