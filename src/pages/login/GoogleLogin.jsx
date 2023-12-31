import  { useContext,  } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
const GoogleLogin = () => {

     // const[user,setUser] =useState(null);
     const {googleSignIn} =useContext(AuthContext);
     const location = useLocation();
     const navigate = useNavigate();
     console.log(' login page', location);
     
    // const auth = getAuth(app);
    // const provider = new GoogleAuthProvider();
 
     const handleGoogleSignIn =()=>{
         console.log('google sign in')
       
         googleSignIn()
           .then((result) => {
                 
                 const loggedInUser = result.user;
                 console.log(loggedInUser);
                 console.log(result.user.displayName)
                 console.log(loggedInUser.displayName)
                  // navigate after login
                  navigate(location?.state ? location.state : '/');
                
               
               })
               .catch((error) => {
                 console.error(error);
             });
    
      }
    return (
        <div>
             <button onClick={handleGoogleSignIn } className='font-extrabold btn border-2  text-green-900'>Google Login</button>
        </div>
    );
};

export default GoogleLogin;