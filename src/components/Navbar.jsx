import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { removeUser } from '../utils/userSlice';
import { useEffect } from 'react';


const Navbar = () => {

  const user= useSelector((store)=>store.user);
  console.log("Navbar User Data:",user);


  useEffect(()=>{
    const storedUserData= sessionStorage.getItem("userSessionData");
    if(storedUserData ){
      console.log("Stored User Data Found in Session Storage", storedUserData);
    }
    console.log("Navbar Component Mounted");
  },[]);



  
  const dispatch= useDispatch();
  const navigate= useNavigate();


  const handlelogout= async()=>{
    try{
      const res= await fetch(BASE_URL+"/logout",{
        method:"POST",
        headers: {
        "Content-Type": "application/json",
      },
        credentials: "include",
      }
    );
    dispatch(removeUser());
    return navigate("/login");

      //const data= await res.json();
      //console.log("Logout Response:",data);
    }
    catch(err){
      console.log("Logout Error:",err); 
    }

  };

  return (
  <div className="navbar bg-base-200 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl hover:shadow-gray-400">DevTinder</Link>
  </div>
 { user && <div className="flex gap-2">
    <p>Welcome , {user.firstName}</p>
    
    <div className="dropdown dropdown-end mx-10">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user-photo"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handlelogout}>Logout</a></li>
      </ul>
    </div>
  </div>}
</div>
  )
}

export default Navbar;