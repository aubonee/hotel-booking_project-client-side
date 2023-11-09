import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedRooms = () => {
    return (
     <div className='w-full mx-auto flex flex-col justify-center items-center'>
       <div className='text-[#495737] font-extrabold text-5xl py-5 '>Featured <span className='text-[#E1AF55]'>Rooms</span></div>
       
           <div className="carousel mx-auto w-full md:w-5/6 lg:w-2/4 h-[60vh] bg-center">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/qCdz5xJ/25.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/tYJBJfP/ig4.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/JFzQHH0/15.jpg" className="w-full" />
     
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/55ddp6T/14.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
 
</div>

    
<Link to={'/rooms'}>  <button className="btn text-white bg-[#E1AF55] mx-2 border-none my-5">Book A Room Now</button></Link> 
     </div>
    );
};

export default FeaturedRooms;