import React from 'react'
import { Link } from 'react-router-dom'

function NavHeader() {
  return (
    <ul className="nav d-flex justify-content-between w-100 bg-primary ">
    <li className="nav-item ">
      <a className="nav-link  text-light my-1" aria-current="page" href="/">DashBoard</a>
    </li>

<div className='d-flex my-1'>
    <li><Link to="/" className="btn btn-primary mx-2">product</Link></li>   
 <li><Link to="/brand" className="btn btn-primary mx-2">Brand</Link></li> 
 <li><Link to="/category" className="btn btn-primary mx-2">category</Link></li> </div>
    <li className="nav-item">
   <strong>    <a className="nav-link text-light my-1 " href="/">

     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark-bar-graph" viewBox="0 0 16 16">
  <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
</svg>
      </a></strong>
    </li>
  

  </ul>

  )
}

export default NavHeader