import  { useEffect, useState } from 'react';
import RoomCard from './RoomCard';

const Rooms = () => {
    const [rooms , setRooms]=useState([]);

    useEffect(()=>{
        fetch('https://hotel-booking-server-side-eight.vercel.app/rooms')
        .then(res=>res.json())
        .then(data => setRooms(data))
    },[])
    return (
        <div className=" w-11/12 mx-auto ">
            <h3 className="text-center text-xl">rooms</h3>
       
        <div className=" grid grid-cols-3 gap-4">
              
              {
                rooms.map(room=> <RoomCard key={room._id} room={room}></RoomCard>)
              }
        </div>
      
        </div>
       
    );
};

export default Rooms;