import React from 'react'

const Profile = ({myimage,fullname,bio,profession,show}) => {
  return (
    
    <div className='informations'>
      <img src={myimage} alt='img' className='image-profile'/>
      <h1>{fullname}</h1>
      <h4>{bio}</h4>
      <p>{profession}</p>
      <button onClick={()=>show(fullname)}>Click to view profile</button>
      
    </div>
  )
}

export default Profile
