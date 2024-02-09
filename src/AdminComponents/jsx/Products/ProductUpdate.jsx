import React, { useState }  from "react";
import Product from "./Product";
import useProducts from "../../hooks/useProducts";
import Head from "../../panel/Head";
import SBar from "../../panel/SBar";


function ProductUpdate() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }
  const {
    productItem, handleUpdateProperty,
    idx ,  products,  size, color,
    brand, files, setFiles,info,
    params, setInfo, UploadImages,
    update,url, setUrl,urlx,deleteUrl

  } =useProducts()
  return (
    <div className='grid-Product'>
    <Head OpenSidebar={OpenSidebar} />
    <SBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    <Product  productItem={productItem} handleUpdateProperty={handleUpdateProperty}
    idx={idx}   products={products}  size={size}  color={color}
    brand={brand}  files={files} setFiles={setFiles} info={info}
    params={params} setInfo={setInfo} UploadImages={UploadImages}
    update={update} url={url} setUrl={setUrl} urlx={urlx}   deleteUrl ={deleteUrl}/></div>
  );
}

export default React.memo(ProductUpdate);
