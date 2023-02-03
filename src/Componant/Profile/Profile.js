import React from 'react'

const Profile = ({fullname,bio,profession,show}) => {
  return (
    
    <div className='informations'>
      
      <h1>{fullname}</h1>
      <h3>{bio}</h3>
      <p>{profession}</p>
      <button onClick={()=>show(fullname)}>Click to view profile</button>
      
    </div>
  )
}

export default Profile
