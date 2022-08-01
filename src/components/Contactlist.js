import React from 'react'
import Contactcard from './Contactcard';

function Contactlist({contactss}) {
  const renderlist=contactss.map((contactss,id)=>{
    return(
     <Contactcard contact={contactss} key={id}/>
    )
  });
  return (
    <div className='ui celled list'>{renderlist}</div>
  )
}

export default Contactlist