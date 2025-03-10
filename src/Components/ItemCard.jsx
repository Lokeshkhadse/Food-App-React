// import React from 'react'
// import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'
// import { MdDelete } from "react-icons/md";
// import { useDispatch } from 'react-redux';
// import { removeFromCart } from '../redux/Slices/CartSlice';
// import { incrementQty,decrementQty } from '../redux/Slices/CartSlice';
// import { useSelector } from 'react-redux';
// import { toast } from "react-hot-toast";



// const ItemCard = ({id,name,img,price,qty}) => {

//   const dispatch = useDispatch();

//   return (
//     <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>

//          <MdDelete
//                   onClick={() => {
//                            dispatch(removeFromCart({ id, img, name, price, qty }));
//                           toast(`${name} Removed!`, {
//                            icon: "👋",
//                          });
//                       }}
//         className="absolute right-7 text-gray-600 cursor-pointer"
//       />
//       <img src= {img} alt=''
//       className='w-[50px] h-[50px]'/>

//       <div className='leading-5' >
//         <h2 className='font-bold text-gray-800'>{name}</h2>
//         <div className='flex justify-between'>
//             <span className='text-green-500 font-bold'>₹{price}</span>
            
//             <div className="flex justify-center items-center gap-2 absolute right-7">
//             <AiOutlineMinus  onClick={() => {
//                 if (qty > 1) {
//                   dispatch(decrementQty({ id }));
//                 } else {
//                   dispatch(removeFromCart({ id })); // Remove item when qty reaches 0
//                 }
//               }}
//               className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
//             />

//             <span>{qty}</span>
            
//             <AiOutlinePlus 
//               onClick={() => dispatch(incrementQty({ id }))}
//               className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
//             />
//           </div>
//        </div>

//       </div>
      

//     </div>
//   )
// }

// export default ItemCard


import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, img, price, qty }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 shadow-md rounded-lg p-3 relative">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, { icon: "👋" });
        }}
        className="absolute right-5 text-gray-600 cursor-pointer text-xl"
      />

      <img src={img} alt="" className="w-[50px] h-[50px]" />

      <div className="leading-5 flex-1">
        <h2 className="font-semibold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-semibold">₹{price}</span>

          <div className="flex items-center gap-3 absolute right-10">
            <AiOutlineMinus
              onClick={() => {
                if (qty > 1) {
                  dispatch(decrementQty({ id }));
                } else {
                  dispatch(removeFromCart({ id }));
                }
              }}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />

            <span className="text-gray-800 font-bold">{qty}</span>

            <AiOutlinePlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
