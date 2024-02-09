import useBrandUpdate from "../../hooks/useBrandUpdate";
import { useState } from "react";
import Head from "../../panel/Head";
import SBar from "../../panel/SBar";
import Brand from "./Brand";
/*
 * Component for updating a category.
 * Displays a form to update the category's title and upload/delete images.
 */

function BrandUpdate() {
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
} = useBrandUpdate();

  // jsx
  return (
    <div className='grid-Product'>
    <Head OpenSidebar={OpenSidebar} />
    <SBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />


<Brand  title={title}
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
        warning={warning}/>
    </div>
  );
}

export default BrandUpdate;
