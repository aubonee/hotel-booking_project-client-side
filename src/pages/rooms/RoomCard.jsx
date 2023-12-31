import { Link } from "react-router-dom/dist";


const RoomCard = ({room}) => {
    const {_id, room_images, description, room_size}= room;
   
    const first_image = room_images[1];

    return (
     
     
        
       <Link to={`/rooms/${_id}`}>
        <div  className="">
        <figure  className="px-10 pt-10"><img src={first_image} alt="Shoes" className="rounded-none" /></figure>
        {/* <div className="card-body">
          <h2 className="card-title">{description}</h2>
          <p>Room Size:{room_size}</p>
          <div className="card-actions justify-end">
           
          </div>
        </div>  */}
        </div></Link>
       
     
       
    );
};

export default RoomCard;