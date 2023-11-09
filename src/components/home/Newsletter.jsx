import React from 'react';
import { Link } from 'react-router-dom';

const Newsletter = () => {
    return (
        <div className='w-full mx-auto flex flex-col justify-center items-center'>
             <div className="parallax hero w-5/6 min-h-[50vh] rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/55ddp6T/14.jpg)'}}>
            {/*  */}
            <div className="hero-overlay bg-opacity-70 rounded-xl"></div>
      
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
                JOIN NOW
            </h1>
            <p className="mb-5">"Book your room now, starting from BDT 200 per night".</p>
      
          
          </div>
        </div>
      </div>
        </div>
    );
};

export default Newsletter;