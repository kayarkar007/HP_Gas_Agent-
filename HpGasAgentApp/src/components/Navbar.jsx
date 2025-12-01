import React from "react";

const Navbar = ({theme,Toggletheme}) => {
  return (
    <div className={`flex flex-col p-4 ${theme ? 'text-white' :'text-black'}`}>
      <div className="logo text-2xl flex items-center justify-evenly mb-8">
        <img className="w-12 h-12 mr-4" src="/HpgasLogo.jpg" alt="Hp gas logo" />
        <h1 className="font-bold">HP Gas</h1>
        <div onClick={Toggletheme} className={`themeButton border-2 w-20 h-10 rounded-full ml-2 flex items-center p-1 relative cursor-pointer ${theme ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div className={`w-8 h-8 rounded-full absolute transition-all duration-300 ${theme ? 'bg-black translate-x-0' : 'bg-white translate-x-10'}`}></div>
            <div className="light w-1/2 h-full flex justify-center items-center"><img className="w-6" src="/sun.png" alt="theme sun logo" /></div>
            <div className="dark w-1/2 h-full flex justify-center items-center"><img className="w-6" src="/half-moon.png" alt="halfmoon png " /></div>
        </div>
      </div>
      <div className="links">
        <ul className="space-y-4">
          <li>
            <a href="#" className="block hover:text-gray-300">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-300">Customer Details</a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-300">Add Customers</a>
          </li>
          <li>
            <a href="#" className="block hover:text-gray-300">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
