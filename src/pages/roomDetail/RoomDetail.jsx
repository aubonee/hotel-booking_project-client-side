import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom/dist';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const RoomDetail = () => {
    const detail =useLoaderData();
    const {_id,title,availability, room_images, description,price_per_night,quantity,special_offers, room_size}= detail;
    const [selectedDate, setDate] =useState(null)
    const handlebook =() => {
    }
       // const newItem={...detail,email:user?.email}
    // fetch(`https://cosmetics-brand-server.vercel.app/cart`,{
    //   method:'POST',
    //   headers:{
    //     'content-type':'application/json'
    //   },body:JSON.stringify(newItem)
    // })
    // .then(res=>res.json())
    //     .then(data =>{
    //       console.log(data);
    //       if(data.insertedId){
    //           Swal.fire(
    //               'Good job!',
    //               'Succesfully Added to Cart!',
    //               'success'
    //             )
  
  
    //       }
    //     })
     
  
     const first_image = room_images[0];
     const second_image = room_images[1];
      
    return (
        <div className='flex items-center justify-center flex-col'>
            room detail
            <div className='flex  justify-center flex-col my-3 bg-base-100 shadow-xl p-5 max-w-[920px] '>
           

           <div className="flex gap-5">
 <img className='max-w-[420px] bg-gray-300' src={first_image} alt="Shoes" />
 <img className='max-w-[420px] bg-gray-300' src={second_image} alt="Shoes" />

 


</div>
<div className=" text-left mt-3">

 
   <h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Room Name :</span> {title}</h2>
   <h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Room Description :</span> {description}</h2>
   <h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Quantity :</span> {quantity}</h2>
   <h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Price per night :</span> {price_per_night}</h2>
   <h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>Room size :</span> {room_size}</h2>
   <h2 className="font-semibold font-xl"> <span className='text-green-900 font-bold'>special_offers :</span> {special_offers}</h2>
   <div className='availability'>

   {quantity > 0 ? (
  <h2 className="font-semibold font-xl"><span className='text-green-900 font-bold'>Status :</span> Available</h2>
) : (
  <h2 className="font-semibold font-xl"><span className='text-green-900 font-bold'>Status :</span> Unvailable</h2>
)}
   </div>
   <div>
    <div className="font-semibold font-xl"> <span className='text-green-900 font-bold'> Choose the Date:</span>  <DatePicker className='border-2 border-black' selected={selectedDate} onChange={date=>setDate(date)}></DatePicker></div>
    <button className='btn bg-green-900 text-white my-3 p-3'> Book Now </button>
   </div>
  
    
    </div> 
       </div>
        </div>
    );
};

export default RoomDetail;