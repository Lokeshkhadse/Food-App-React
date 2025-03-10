// import React from 'react'
// import{IoMdClose} from "react-icons/io";
// import ItemCard from './ItemCard';
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import { FaShoppingCart } from 'react-icons/fa';

// const Cart = () => {

//   const [activeCart ,setActiveCart] = useState(false);

//   const cartItems = useSelector((state) => state.cart.cart );

//   const totalQty = cartItems.reduce((totalQty , item) => totalQty + item.qty , 0);
//   const totalAmount = cartItems.reduce((totalAmount ,item) => totalAmount +  item.qty * item.price , 0);

//   return (
//    <>
//          <div   className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
//                            activeCart ? "translate-x-0" : "translate-x-full"
//                             } transition-all duration-500 z-50`}>
  
//              <div className='flex justify-between items-center my-3'>
//                  <span className='text-xl font-bold text-gray-800'>My Order</span>
//                    <IoMdClose
//                      onClick={() => setActiveCart(!activeCart)}
//                     className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300
//                     hover:border-red-400 cursor-pointer"/>
//            </div>

//   { cartItems.length > 0 ?
//     cartItems.map((food) => {
//       return  <ItemCard
//       key={food.id}
//       id={food.id}
//       name={food.name}
//       price={food.price}
//       img={food.img}
//       qty={food.qty}
//     />
//     }) : <h2 className='font-bold  text-xl text center text-gray-800 ml-10'>Your Cart Is Empty</h2>
//   }
//      <div className='absolute bottom-0'>
//     <h3 className='text-gray-800 font-semibold'>Items:{totalQty}</h3>
//     <h3 className='text-gray-800 font-semibold'>Total Amount: {totalAmount}  </h3>
//     <hr className='w-[90vw]  lg:w-[18vw]  my-2' />
//     <button className='bg-green-500 font-bold px-3 text-white p-2 rounded-lg lg:w-[18vw] w-[90vw] mb-5'>CheckOut</button>
//   </div>
  
//    </div>
//    <FaShoppingCart onClick = {() => setActiveCart(!activeCart)}
//                        className={`fixed right-4 bottom-4 rounded-full bg-white shadow-mg text-5xl p-3
//                        ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`} />

//    </>
//   )
// }

// export default Cart



import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalAmount = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
  const navigate = useNavigate();


  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[22vw] h-full bg-white shadow-xl p-5 transition-transform duration-500 z-50 
          ${
          activeCart ? "translate-x-0" : "translate-x-full"
          }`}
      >

        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-400 hover:border-red-400 cursor-pointer"
          />
        </div>



        <div className="overflow-y-auto max-h-[65vh] pr-4">
          {cartItems.length > 0 ? (
            cartItems.map((food) => (
              <ItemCard key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
            ))
          ) : (
            <h2 className="font-bold text-xl text-center text-gray-800">Your Cart Is Empty</h2>
          )}
        </div>



        <div className="absolute bottom-0 left-0 w-full bg-white p-4 shadow-md">
          <h3 className="text-gray-800 font-semibold">Items: {totalQty}</h3>
          <h3 className="text-gray-800 font-semibold">Total: ₹{totalAmount}</h3>
          <hr className="my-2" />
          <button 
            onClick={() => navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-full mb-3">
            Checkout
          </button>
        </div>
      </div>



      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`fixed right-1 bottom-4 rounded-full bg-white shadow-md text-5xl p-3 
          ${
          totalQty > 0 && "animate-bounce"
          }`}
      />
    </>
  );
};

export default Cart;
