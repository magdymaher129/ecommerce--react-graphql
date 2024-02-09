import React, { createContext, useState } from "react";
import SBar from "./SBar";
import Head from "./Head";
import Home from "./Home";
import "../css/dashboard.css";

function Panel() {


  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (

    <div className='grid-container'>
      <Head OpenSidebar={OpenSidebar}/>
      <SBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <Home />
   </div>

  );
}

export default Panel;
