import React, { useState } from 'react'
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'; 
import axios from 'axios';

const EditProfile = ({user}) => {
  console.log("Edit Profile user:",user);
    const [firstName,SetfirstName]=useState(user.firstName);
    const [lastName,SetlastName]=useState(user.lastName);
    const [about,SetAbout]=useState(user.about);
    const [photoUrl,SetPhotoUrl]=useState(user.photoUrl);
    const [error,SetError]=useState(" ");
    const dispatch= useDispatch();

const saveProfile = async () => {
  try {
    const res = await axios.patch(
      BASE_URL + "/profile/edit",
      { firstName, lastName, photoUrl, about },
      { withCredentials: true }
    );

    console.log("UPDATED USER:", res.data);

    // Adjust based on backend structure
    //dispatch(addUser(res.data.user || res.data));
      dispatch(addUser(res?.data?.user));
    console.log("Profile updated successfully"); 

    SetError("");
  } catch (err) {
    console.log("Axios Error:", err);
    SetError(err?.response?.data?.message || "Profile update failed");
  }
};



  return (
<div className='flex justify-center my-10 mx-35'>
      <div className="flex justify-center w-1/2 gap-0">
  
  <div className="card-body max-w-1/2 bg-gray-200 rounded-2xl ">
<h2 className='text-green-700'>Edit Profile</h2>
    <label className="input validator my-5">
      
  <input
    type="text"
    value={firstName}
    required
    placeholder="Enter First Name"
    // pattern="[A-Za-z][A-Za-z0-9\-]*"
    // minlength="3"
    // maxlength="30"
    // title="Only letters, numbers or dash"
    onChange={(e)=>SetfirstName(e.target.value)}
  />
</label>


    <label className="input validator  ">
  <input
    type="text"
    value={lastName}
    required
    placeholder="Enter Last Name"
    // pattern="[A-Za-z][A-Za-z0-9\-]*"
    // minlength="3"
    // maxlength="30"
    // title="Only letters, numbers or dash"
    onChange={(e)=>SetlastName(e.target.value)}
 />
</label> 
  <label className="input validator my-5"> 
  <input
    type="text"
    value={about}
    required
    placeholder="Enter About Yourself"
    // pattern="[A-Za-z][A-Za-z0-9\-]*"
    // minlength="3"
    // maxlength="30"
    // title="Only letters, numbers or dash"
    onChange={(e)=>SetAbout(e.target.value)}
 />
</label> 
  <label className="input validator  ">
  <input
    type="text"
    value={photoUrl}
    required
    //placeholder="Enter About Yourself"
    // pattern="[A-Za-z][A-Za-z0-9\-]*"
    // minlength="3"
    // maxlength="30"
    // title="Only letters, numbers or dash"
    onChange={(e)=>SetPhotoUrl(e.target.value)}
 />
</label> 
    {/* <p className='text-red-700'>{error}</p> */}
    <p className="text-red-500">{error}</p>
    <div className="card-actions justify-center my-3">   
      <button className="btn btn-primary" onClick={saveProfile} >Save Profile</button>
    </div>
  </div>
</div>
<UserCard user={{firstName,lastName,about,photoUrl}}/>
</div>
  )
}

export default EditProfile;
