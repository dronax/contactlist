import React, { useState } from "react";

function Addcontact({ addContactHandler }) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });
  const update = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
      
    });
  };
  const add = (a) => {
    a.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All fields are Mandatory!");
      return;
    }
    addContactHandler(contact);
    setContact({name:"",email:""})
    console.log(contact);
    
  };

  // setContact({
  //   name: "",
  //   email: "",
  // });
  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={update}
          ></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={update}
          ></input>
        </div>
        <button className="ui button blue center">Add</button>
      </form>
    </div>
  );
}

export default Addcontact;
