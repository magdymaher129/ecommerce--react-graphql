import React, { useState } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'

import Head from './Head'
import SBar from './SBar'
import CategoryPage from '../pages/CategoryPage'

function CategoryPanel() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  return (
  <div className='grid-Product'>
   <Head OpenSidebar={OpenSidebar}/>
    <SBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> 

   <CategoryPage/>
    </div>

  )
}

export default React.memo(CategoryPanel)
