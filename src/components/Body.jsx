import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Login from './Login'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios'

const Body = () => {

  const dispatch= useDispatch();
  const navigate= useNavigate();
  const userData= useSelector((store)=>store.user);
  console.log("User Data in Body:",userData);
  const fetchUser= async() =>{

// try    {      
//   const user= await fetch(BASE_URL+"/profile/view", // fetch() only rejects the promise (and thus triggers catch) if there’s a network error (like loss of internet, DNS failure, etc.).
//         {
//           method:"GET",
//           headers: {
//         "Content-Type": "application/json",
//       },
//           credentials:"include",
//         }
//       );
//       // console.log("User Data:", await user.json()) we cant write two times await on same promise
//       const data1= await user .json();
//       console.log("Fetched User:", data1);
//       dispatch(addUser(data1));

//       console.log(dispatch(addUser(data1)));


//     }
      

//       catch(err){
//         console.log("Error Status:", err.statusCode);
//         // if(err.statusCode===undefined || err.statusCode===401){
//         //   navigate("/login");
//         //   console.log("Unauthorized Access, Redirecting to Login");
//         // }
//         console.log("Fetch User Error:", err);
//       }
//   };
    try{
   
      const res= await axios.get(BASE_URL+"/profile/view",{
        withCredentials:true,
      });
      dispatch(addUser(res.data));
    }catch(err){
      
       return navigate("/login");
       // console.log("Unauthorized Access, Redirecting to Login"); 
      }
         

    }
  
useEffect(()=>{
  if(!userData){
      fetchUser();
  }
  
},[]);
  
  return (
    <div>
      <Navbar/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

export default Body
