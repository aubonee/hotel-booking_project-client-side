import { Link } from "react-router-dom/dist";


const Login = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/XYRMxPN/12.jpg)'}}>
        <div className="">
<div className="hero-content bg-black bg-opacity-20  flex-col ">


<div data-aos="fade-down"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className="card mx-24 flex-shrink-0 w-full text-white   bg-transparent">
  <form  className="card-body  ">
  <h1 data-aos="fade-right"  data-aos-easing="ease-out-cubic"  data-aos-duration="2000" className="text-5xl text-white font-bold text-center">Login now!</h1>
  {/* onSubmit={handleLogin} */}
    <div className="form-control ">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name='email' placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required />
     
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-[#495737] text-white">Login</button>

      {/* <div className='flex items-center justify-center my-2'><GoogleLogin ></GoogleLogin></div> */}
      
    </div>

  </form>
  <div className='text-center mb-5'><p>Dont have an account?</p> <span className='text-[#E1AF55] font-bold'> <Link to="/register">Register</Link></span> </div>
</div>
</div>
</div>
        </div>
    );
};

export default Login;