import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Panel from './AdminComponents/panel/Panel'
import ProductPanel from './AdminComponents/panel/ProductPage'
import CategoryPanel from './AdminComponents/panel/CategoryPanel'
import BrandPanel from './AdminComponents/panel/BrandPanel'
import AdminAddItem from './AdminComponents/jsx/AdminAddItem'
import AddCategories from './AdminComponents/jsx/categories/AddCategories'
import AddBrands from './AdminComponents/jsx/Brands/AddBrands'
import CategoryUpdate from './AdminComponents/jsx/categories/CategoryUpdate'
import BrandUpdate from './AdminComponents/jsx/Brands/BrandUpdate'
import ProductUpdate from './AdminComponents/jsx/Products/ProductUpdate'
import AddProducts from './AdminComponents/jsx/Products/AddProducts'

function Helper() {
    


  return (
 <BrowserRouter basename='/'>

    <Routes>
      <Route path='/' element={<Panel />} />
      <Route path='/product' element={<ProductPanel />} />
      <Route path='/category' element={<CategoryPanel />} />
      <Route path='/brand' element={<BrandPanel />} />
      <Route path='/additem' element={<AdminAddItem />} />
      <Route path='/addcat' element={<AddCategories />} />
   
      <Route path='/addbrand' element={<AddBrands />} />
      <Route path='/updatecat/:id' element={<CategoryUpdate />} />
  
      <Route path='/updatebrand/:id' element={<BrandUpdate />} />
      <Route path='/updateproduct/:id' element={<ProductUpdate />} />
      <Route path='/addproduct' element={<AddProducts />} />
    </Routes>


  </BrowserRouter>
  )
}

export default Helper