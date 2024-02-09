import React, { useState } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'

import Head from './Head'
import SBar from './SBar'
import CategoryPage from '../pages/CategoryPage'
import BrandPage from '../pages/BrandPage'

function BrandPanel() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
    <div className='grid-Product'>
    <Head OpenSidebar={OpenSidebar}/>
    <SBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

   <BrandPage/>
  </div>

  )
}

export default BrandPanel
