import React from 'react';
import FoodCard from './FoodCard';
import FoodData from '../Data/FoodData';
import toast,{Toaster} from 'react-hot-toast';
import { useSelector } from "react-redux";


const FoodItem = () => {
  
   const category = useSelector((state) => state.category.category);
   const search = useSelector((state) => state.search.search);


  const handleToast = (name) => toast.success(`Added ${name} to Cart `)
  return (
    <>
     <Toaster position="top-center" reverseOrder={false} />
    <div className='flex flex-wrap gap-15 justify-center lg:justify-start mx-6 my-10'>
      {
        FoodData.filter((food) => {
          if(category === "All"){
            return food.name.toLowerCase().includes(search.toLowerCase());
          }else{
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((food) => (
          <FoodCard 
          key={food.id} 
          id={food.id}
          name={food.name}
          price={food.price}
          desc={food.desc}
          rating={food.rating}
          img={food.img}
          handleToast={handleToast}
            />
        ))
      }


{/* 
      FoodData.map((food) => (
        <FoodCard 
        key={food.id} 
        id={food.id}
        name={food.name}
        price={food.price}
        desc={food.desc}
        rating={food.rating}
        img={food.img}
        handleToast={handleToast}
          />
      )) */}
    </div>
    </>
  );
};

export default FoodItem;
