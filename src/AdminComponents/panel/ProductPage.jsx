import React, { useState } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
import ProductsTable from '../jsx/ProductsTable'
import HomeAdminPage from '../pages/HomeAdminPage'
import Head from './Head'
import SBar from './SBar'

function ProductPanel() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div className='grid-Product '>
    <Head OpenSidebar={OpenSidebar}/>
    <SBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

   <HomeAdminPage/>
    </div>

  )
}

export default ProductPanel
