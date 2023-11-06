import React from 'react';
import { useLoaderData } from 'react-router-dom/dist';

const RoomDetail = () => {
    const detail =useLoaderData();
    const {_id, room_image, description, room_size}= detail;
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
     
  
     
      
    return (
        <div>
            room detail
            <div className='flex items-center justify-center'>
           

           <div className=" my-3 card lg:card-side w-[920px] bg-base-100 shadow-xl">
 <figure><img className='h-[580px] w-[720px] bg-gray-300' src={room_image} alt="Shoes" /></figure>
 <div className="card-body">
   <h2 className="card-title">
   {description}
     {/* <div className="badge badge-secondary">{price} BDT</div> */}
   </h2>
  
   <div>
    {/* <div className="badge badge-outline  p-2 m-2">Brand:{brandname}</div> 
     <div className="badge badge-outline p-2 m-2">Rating : {rating}</div>
     <div className="badge badge-outline  p-2 m-2">Category :{category}</div>*/}
    </div> 
   <div className="card-actions justify-center">
   
      <br />
      <div className='flex justify-end items-center'> 
       <button className='btn bg-red-400' onClick={()=>handlebook()}>Book now</button>
     </div>
   
   </div>
 </div>
</div>
       </div>
        </div>
    );
};

export default RoomDetail;