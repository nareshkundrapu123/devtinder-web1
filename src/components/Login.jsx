import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';



const Login = () => {

  const [emailid,Setemailid]=useState("");
  const [password,Setpassword]=useState("");
  const [error,seterror]=useState("");
  const dispatch= useDispatch();
  const navigate= useNavigate();
  
  const Handlelogin = async()=>{

    try{

    //   const res= await fetch(BASE_URL+"/login",{
    //     method:"POST", headers: {
    //     "Content-Type": "application/json",
    //   },
    //     credentials: "include",
    //   body: JSON.stringify({
        
    //     emailId: emailid, // match backend variable name
    //     password: password,
    //   },
      
    // )
    //  }
    // ); 
    const res= await axios.post(BASE_URL+"/login",{
        emailId: emailid, // match backend variable name
        password: password,
      },
      {
        withCredentials:true,
      }
    );
    
    //  const data = await res.json(); 
    //  console.log("Login Response:",data);
    //  if (data.status == true) {
    //   dispatch(addUser(data.user));
    //   return navigate("/");
    //  }
    //   seterror(data.message);
    //console.log("Login Response:",res);
   // sessionStorage.setItem("userSessionData",res.user);
    

    dispatch(addUser(res.data.user));
      return navigate("/");
    // console.log("User Logged In and Redirected to Home");
    }

    catch(err){
    // console.log("Login Error:",err.response.data.message);

       seterror(err.message); 
       console.error("Login Error Message Set:",err.message);
       console.log("Error Message Set:"+err.message);
    }


  }


  return (
    
      <div className="card card-side  shadow-sm bg-center flex justify-center mx-100  my-24">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body max-w-1/2 bg-gray-200 rounded-2xl ">

    <label className="input validator my-5">
  <input
    type="text"
    value={emailid}
    required
    placeholder="Enter Emailid"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minlength="3"
    maxlength="30"
    title="Only letters, numbers or dash"
    onChange={(e)=>Setemailid(e.target.value)}
  />
</label>


    <label className="input validator  ">
  <input
    type="text"
    value={password}
    required
    placeholder="Enter Password"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minlength="3"
    maxlength="30"
    title="Only letters, numbers or dash"
    onChange={(e)=>Setpassword(e.target.value)}
 />
</label> 
    <p className='text-red-700'>{error}</p>
    <div className="card-actions justify-center my-6">   
      <button className="btn btn-primary" onClick={Handlelogin}>Login</button>
    </div>
  </div>
</div>
    
  )
}

export default Login;
