import React from "react";
import styles from "../styles/styles.module.css";
import InputText from "../components/InputText";

import InputArea from "../components/InputArea";
import InputFile from "../components/InputFile";
import ImageExisting from "../components/ImageExisting";
import { Button } from "react-bootstrap";
import ImageItem from "../components/ImageItem";
import Samples from "../components/Samples";


function Product({
  productItem,
  handleUpdateProperty,
  idx,
  products,
  size,
  color,
  brand,
  files,
  setFiles,
  info,
  params,
  length,
  setInfo,
  UploadImages,
  update,
  url,
  setUrl,
  urlx,
  deleteUrl,
})


{
  return (

    <div className={styles.brandUpdateContainer}>
      {productItem && (
        <h2 className={styles.brandUpdateTitle}>
          Update{" "}
          <span style={{ color: "green", textTransform: "capitalize" }}>
            {productItem.product.data.attributes.title}
          </span>{" "}
        </h2>
      )}
      <div className={styles.productItem}>
        {productItem ? (
          <>
            <InputText
              placeholder={
                productItem.product.data.attributes.categories.data[0]
                  .attributes.title
              }
              handleUpdateProperty={handleUpdateProperty}
              property='category'
              type='text'
              // params={params}
            
              disabled
            />
            <InputText
              placeholder={productItem.product.data.attributes.title}
              handleUpdateProperty={handleUpdateProperty}
              property='title'
              type='text'
              // params={params}
            />

            <InputText
              placeholder={productItem.product.data.attributes.price}
              handleUpdateProperty={handleUpdateProperty}
              property='price'
              type='number'
              //  params={params}
            />
          </>
        ) : (
          ""
        )}
      </div>

      {/* selections */}

      {productItem && idx && products && size ? (
        <Samples
          index={idx}
          name='size'
          handleUpdateProperty={handleUpdateProperty}
          products={products}
          item={size}
        />
      ) : (
        ""
      )}
      {productItem && idx && products && color ? (
        <Samples
          index={idx}
          name='color'
          handleUpdateProperty={handleUpdateProperty}
          products={products}
          item={color}
        />
      ) : (
        ""
      )}
      {productItem && idx && products && brand ? (
        <Samples
          index={idx}
          name='brand'
          handleUpdateProperty={handleUpdateProperty}
          products={products}
          item={brand}
        />
      ) : (
        ""
      )}

      {/* selections */}
      {productItem && (
        <InputArea
          label='Description'
          //  setParams={setParams}
          desc={productItem.product.data.attributes.desc}
          handleUpdateProperty={handleUpdateProperty}
          property='desc'
        />
      )}

      {/* images */}
      <InputFile setFiles={setFiles} setInfo={setInfo} url={params} />

      <div className={styles.imageContainer}>
        {files &&
          files.map((file, index) => (
            <ImageItem
              key={index}
              file={file}
              files={files}
              setFiles={setFiles}
              params={params}
            />
          ))}
      </div>
      {/* images */}
      {/*  existing images */}
      <div className='d-flex  flex-wrap gap-3'>
        {params &&
          params.map((file, index) => (
            <ImageExisting
              key={index}
              file={file}
              urlx={urlx}
              files={params}
              deleteUrl={deleteUrl}
            />
          ))}
      </div>
      <div className='d-flex  justify-content-between mt-2'>
        <Button onClick={UploadImages}> upload </Button>
        {/* title,price,size,color,desc */}
        <Button variant='danger' onClick={() => update()}>
          {" "}
          update{" "}
        </Button>
        {/* <Button variant='danger' onClick={() => console.log("result", result)}>
       
        test
      </Button> */}
      </div>
      {info ? (
        <p
          style={{
            backgroundColor: "lightpink",
            marginTop: "10px",
            padding: "10px 20px",
            fontSize: "18px",
          }}
        >
          {info}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Product;
