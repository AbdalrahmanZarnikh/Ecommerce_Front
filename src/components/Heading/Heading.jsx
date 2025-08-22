import React from 'react';

const Heading = ({ children }) => {
  return (
    <h1 className="text-2xl font-black  relative w-fit px-4 py-2 text-gray-700  rounded-lg   group cursor-pointer  dark:text-white ">
      {children}
      <span className="absolute bottom-0 left-1/2 right-1/2 translate-1/2 w-1/4  h-1 bg-blue-400 group-hover:w-full  transition-all duration-500 ease-in-out"></span>
    </h1>
  );
};

export default Heading;
