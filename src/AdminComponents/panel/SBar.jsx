import React from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
function SBar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id='sidebar'
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /><span className="iconTitle">SHOP</span> 
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className='sidebar-list'>
       
          <Link to='/panel' className="board-links">
 <li className='sidebar-list-item'> <BsGrid1X2Fill className='icon' /> 
 <span className="iconTitle">Dashboard</span>
</li>
           
          </Link>
        
          <Link to='/product' className="board-links">
        <li className='sidebar-list-item'>
            <BsFillArchiveFill className='icon' /><span className="iconTitle">Products</span> 
         
        </li> </Link>

          <Link to='/category' className="board-links">
        <li className='sidebar-list-item'>
            <BsFillGrid3X3GapFill className='icon' /> <span className="iconTitle">Categories</span>
         
        </li> </Link>

          <Link to='/brand' className="board-links">
        <li className='sidebar-list-item'>
            <BsListCheck className='icon' /> <span className="iconTitle">Brand</span>
         
        </li> </Link>
               {/* <Link to='/' className="board-links">
        <li className='sidebar-list-item'>
   
            <BsPeopleFill className='icon' /> <span className="iconTitle">Customers</span>
         
        </li> </Link> */}
         {/* <Link to='/' className="board-links">
        <li className='sidebar-list-item'>
         
            <BsMenuButtonWideFill className='icon' /> <span className="iconTitle">Reports</span>
         
        </li> </Link>
         <Link href='/' className="board-links">
        <li className='sidebar-list-item'>
         
            <BsFillGearFill className='icon' /> <span className="iconTitle">Setting</span>
          
        </li></Link> */}
      </ul>
    </aside>
  );
}

export default SBar;
