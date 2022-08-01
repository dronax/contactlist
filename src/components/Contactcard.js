import React from 'react'
import user from "./images/user.png"

function Contactcard({contact}) {
  const{id,name,email}=contact;
  return (
    <div className="item">
      <img className='ui avatar image' src={user} alt="user"></img>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}}></i>
    </div>
  );
}

export default Contactcard