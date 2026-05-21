import React from "react"

function UserCard({name,role,avatarUrl,isOnline = false}) {
  

  return (
    <>
      <center><img src={avatarUrl} width={150}/> </center>
      <h3>{name}</h3>
      <p>{role}</p>

      <div><input type="checkbox" checked={isOnline} disabled={true}/> Online</div> 
    </>
  )
}

export default UserCard