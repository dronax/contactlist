import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Addcontact from "./Addcontact";
import Contactlist from "./Contactlist";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contactss, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contactss, contact]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactss));
  }, [contactss])
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  },[])
  return (
    <div className="ui container">
      <Header />
      <Addcontact addContactHandler={addContactHandler} />
      <Contactlist contactss={contactss} />
    </div>
  );
}

export default App;
