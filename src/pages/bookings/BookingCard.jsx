import React from 'react';

const BookingCard = ({detail,booking,setBooking,date}) => {
  
    const { _id,title, room_images, description,price_per_night,quantity,special_offers, room_size} = detail;
   
    const first_image = room_images[0];
     const second_image = room_images[1];
     const date_var = date;
     console.log("date");
     console.log(date_var);
     console.log(date);
    return (
        <div>
         
         <div className="mx-auto py-5 my-5 card max-w-[900px] h-[250px] card-side bg-base-100 shadow-xl">
  <figure className='h-full'><img className='ml-5 h-full' src={second_image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title"> {title}</h2>
    <p>{room_size}</p>
    <p>{price_per_night}</p>
    <p>{date_var}</p>
    <div className="card-actions justify-end">
      <button  className="btn btn-primary">Delete</button>
      {/* onClick={()=>handleCartDelete(_id)} */}
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingCard;