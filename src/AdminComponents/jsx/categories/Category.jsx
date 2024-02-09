import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import styles from '../styles/styles.module.css';
import { useSelector } from "react-redux";

function Category({
  title,
  setTitle,
  displayImages,
  files,
  DeleteImages,
  urlx,
  url,
  deleteUrl,
  UploadImages,
  update,
  note,
  warning,
}) {


  
  

  return (
    <div className={styles.brandUpdateContainer}>
      <h2 className={styles.brandUpdateTitle}>
       
        Update
        <span style={{ color: "green", textTransform: "uppercase" ,marginLeft:"2px",fontWeight:"bolder"}}>
          {title}
        </span>
      </h2>
      <label htmlFor='title' className={styles.label}>
        Title
      </label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        // className={styles.inputField}
        id='title'
        style={{ display: "block", marginBottom: "20px" }}
        placeholder={title}
      />
      <input type='file' multiple onChange={(e) => displayImages(e)} />

      <div 
      style={{
        display: "flex",
        margin: "50px 10px",
        flexWrap: "wrap",
        gap: "10px",
        padding: "2px",
      }}
      
      >
        {files &&
          files.map((file, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={URL.createObjectURL(file)}
                width={100}
                height={150}
                style={{
                  border: "1px solid grey",
                  marginLeft: "2px",
                  padding: "4px",
                  borderRadius: "10px",
                }}
                alt='images'
              />
              <button
               style={{
                position: "absolute",
                top: "0",
                right: "0",
                backgroundColor: "red",
                color: "white",
                border: "none",
              }}
                onClick={() => DeleteImages(file)}
              >
                x
              </button>
            </div>
          ))}
      </div>

      {/*  existing images */}
      <div  
        style={{
          display: "flex",
          margin: "50px 10px",
          flexWrap: "wrap",
          gap: "10px",
          padding: "2px",
        }} >
        {url &&
          url.map((file, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={`${urlx}${file.attributes.url}`}
                width={100}
                height={150}
                style={{
                  border: "1px solid grey",
                  marginLeft: "2px",
                  padding: "4px",
                  borderRadius: "10px",
                }}
                alt='images'
              />
              <button
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                }}
                onClick={() => deleteUrl(file)}
              >
                x
              </button>
            </div>
          ))}
      </div>

      <div className='d-flex  justify-content-between '>
        <Button onClick={UploadImages}> upload </Button>
        <Button onClick={() => update(title)} variant='danger'>
          update
        </Button>
      </div>
      {note && <h3 className={styles.noteContainer}>{note}</h3>}

      {warning && <h3 className={styles.warningContainer}>{warning}</h3>}
    </div>
  );
}

export default Category;
