import React from "react";

const Navbar = ({name}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Welcome, {name}</h2>
      <button className="text-red-500">Logout</button>
    </div>
  );
};

export default Navbar;
