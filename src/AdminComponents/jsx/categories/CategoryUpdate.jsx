import React, { useState } from "react";
import useUpdateCategory from "../../hooks/useUpdateCategory";
import Category from "./Category";
import Head from "../../panel/Head";
import SBar from "../../panel/SBar";
import styles from '../styles/styles.module.css';
import { useSelector } from "react-redux";
/*
 * Component for updating a category.
 * Displays a form to update the category's title and upload/delete images.
 */

function CategoryUpdate() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const {
    title,
    setTitle,
    displayImages,
    files,
    note,
    warning,
    DeleteImages,
    deleteUrl,
    url,
    urlx,
    UploadImages,
    update,
  } = useUpdateCategory();



  // jsx
  return (
    <div className='grid-Product'>
      <Head OpenSidebar={OpenSidebar} />
      <SBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Category
        title={title}
        setTitle={setTitle}
        displayImages={displayImages}
        files={files}
        DeleteImages={DeleteImages}
        urlx={urlx}
        url={url}
        deleteUrl={deleteUrl}
        UploadImages={UploadImages}
        update={update}
        note={note}
        warning={warning}
      />
    </div>
  );
}

export default React.memo(CategoryUpdate);
