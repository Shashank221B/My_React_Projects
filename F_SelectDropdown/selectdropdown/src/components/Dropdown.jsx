import React, { useState } from 'react';

const Dropdown = () => {
  const contries = [
    "India", "Pakistan", "Australia", "England", "NewZealand",
    "Bangladesh", "SouthAfrica", "Srilanka", "WestIndies"
  ];

  const [selectedContry, setSelectedContry] = useState([]);

  const handleChange = (e) => {
    if (e.target.value && !selectedContry.includes(e.target.value)) {
      setSelectedContry([...selectedContry, e.target.value]);
    }
  };

  const handleClick = (count) => {
    const filterCountries = selectedContry.filter((country) => country !== count);
    setSelectedContry(filterCountries);
  };

  return (
    <div className="
      flex flex-col gap-6 
      w-[300px] sm:w-[400px] md:w-[600px] lg:w-[700px] 
      border-2 p-6 sm:p-8 md:p-10 rounded-lg 
      bg-white shadow-md mx-auto
    ">
      {/* Dropdown */}
      <select
        className="text-lg sm:text-xl px-3 sm:px-4 py-2 font-semibold text-red-600 border rounded-md"
        value=""
        onChange={handleChange}
      >
        <option value="">Choose a Country from the List Below!</option>
        {contries.map((country, id) => (
          <option className="text-base text-center" value={country} key={id}>
            {country}
          </option>
        ))}
      </select>

      {/* Heading */}
      <h1 className="text-xl sm:text-2xl font-semibold text-blue-700">
        Selected Countries:
      </h1>

      {/* Scrollable area */}
      <div
        className="
          border border-gray-300 rounded-lg p-3 bg-gray-50
          overflow-y-auto
          max-h-40 sm:max-h-56 md:max-h-72
        "
      >
        {selectedContry.length === 0 ? (
          <p className="text-gray-400 text-sm sm:text-base">
            No countries selected yet
          </p>
        ) : (
          selectedContry.map((count, id) => (
            <div
              className="
                flex justify-between items-center 
                bg-blue-400 text-white rounded-lg 
                m-2 p-2 sm:p-3 
                text-base sm:text-lg
              "
              key={id}
            >
              <span>{count}</span>
              <span
                onClick={() => handleClick(count)}
                className="
                  text-xl sm:text-2xl font-bold cursor-pointer 
                  hover:text-red-200
                "
              >
                ✕
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dropdown;
