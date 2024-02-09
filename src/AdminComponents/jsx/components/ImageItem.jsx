import React from 'react';
import styles from '../styles/styles.module.css'; // Import the CSS module

const ImageItem = ({ file,files,setFiles }) => {
      // function to delete images

 
      const DeleteImages = (select) => {
    
        const selected = files.filter((file) => file !== select);
      // console.log(selected);


        setFiles(selected);
       
   
    
      };
  return (
    <div className={styles.imageWrapper}>
      <img
        src={URL.createObjectURL(file)}
        width={100}
        height={150}
        className={styles.image}
        alt='images'
      />
      <button
        className={styles.deleteButton}
       onClick={() => DeleteImages(file)}
      >
        x
      </button>
    </div>
  );
};

export default ImageItem;
