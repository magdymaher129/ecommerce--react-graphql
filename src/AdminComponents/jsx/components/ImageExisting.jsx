import React from 'react'
import styles from '../styles/styles.module.css'; // Import the CSS module
function ImageExisting({file,urlx,deleteUrl}) {
  // function to delete images

 




return (
<div className={styles.imageWrapper}>
  <img
    src={`${urlx}${file.attributes.url}`}
    width={100}
    height={150}
    className={styles.image}
    alt='images'
  />
  <button
    className={styles.deleteButton}
   onClick={() => deleteUrl(file)}
  >
    x
  </button>
</div>
);
}

export default ImageExisting