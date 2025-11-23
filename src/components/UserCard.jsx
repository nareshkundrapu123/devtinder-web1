import React from 'react'

const UserCard = ({user}) => {

console.log("UserCard Props:",user);
const {firstName,lastName,photoUrl,about,skills}=user;
  return (
<div className="card bg-base-200 image-full w-96 shadow-sm ">
  <figure>
    <img
      src= {user.photoUrl}
      alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+ " "+lastName}</h2>
    {/* <p>{age +" "+gender}</p> */}
    <p>{about}</p>
    <div className="card-actions justify-center my-0">
      <button className="btn btn-secondary hover:btn-lg">Ignore</button>
      <button className="btn btn-primary hover:btn-lg">Interest</button>
    </div>
  </div>
</div>
  )
}

export default UserCard
