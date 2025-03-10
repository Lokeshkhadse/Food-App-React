// import React from "react";
// import { useDispatch } from "react-redux";
// import { setSearch } from "../redux/Slices/SerachSlice";


// const Navbar = () => {

//   const dispatch = useDispatch();

//   return (
//     <nav className="flex flex-col lg:flex-row justify-between items-center py-3 mx-6 mb-8 ">
//       <div>
//         <h3 className="text-xl font-bold text-gray-600">
//           {new Date().toUTCString().slice(0, 16)}
//         </h3>
//         <h1 className="text-2xl font-bold ">Yummy Foods</h1>
//       </div>
//       <div>
//         <input
//           type="search"
//           name="search"
//           id=""
//           placeholder="Search here"
//           autoComplete="off"
//           onChange={(e) => dispatch(setSearch(e.target.value))}
//           className="p-3 my-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/Slices/SerachSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-4 px-6 bg-white shadow-md rounded-xl mx-4 lg:mx-6 my-6">

      <div className="text-center lg:text-left">
        <h3 className="text-lg font-semibold text-gray-500">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-3xl font-bold text-gray-800">🍽️ Yummy Foods</h1>
      </div>


      <div className="w-full lg:w-[25vw] mt-4 lg:mt-0">
        <input
          type="search"
          placeholder="🔍 Search delicious food..."
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="w-full p-3 border border-gray-300 rounded-lg outline-none text-gray-700 shadow-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-400 transition-all duration-300"
        />
      </div>
    </nav>
  );
};

export default Navbar;
