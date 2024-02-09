import { Button, Col, Form, Row } from "react-bootstrap";
import "../../css/category.css";
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useCat from "../../hooks/useCat";
import UPDATE_CATEGORY from "../../gql/category/updateCategory";
import GET_Category from "../../gql/category/getCategories";
import GET_CATEGORY_BY_ID from "../../gql/category/getCategoryByID";
import { canonicalStringify } from "@apollo/client/cache";
import Sample from "../../../Sample";
import UPLOAD_IMAGES from "../../gql/upload/uploadImages";

function UpdateCategory() {
  const { id } = useParams();

  const idx = id.substring(1);
  const urlx = "http://localhost:1337";
  const {
    addNew,
    Change,
    data: uploads,
    result,
    info,
    setResult,
    setInfo,
    url,
  } = useCat();
  const [item, setItem] = useState("");
  const [index, setIndex] = useState([]);
  const [urls, setUrls] = useState([]);
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [ids, setIDs] = useState([]);
  const [title, setTitle] = useState(item.title);
  const [updateCategory] = useMutation(UPDATE_CATEGORY);

  const {
    data: category,
    loading,
    error,
  } = useQuery(GET_CATEGORY_BY_ID, {
    variables: { id: idx },
  });

  useEffect(() => {
    if (category) {
      console.log("category", category.category.data.attributes);
      setItem(category.category.data.attributes);
      console.log(id);

      // setId(data.upload.data.id);
    }
  }, [category, id]);

  useEffect(() => {
    let arr = [];
    let arrurl = [];
    let photo = [];
    if (item) {
      //   console.log("id",item.image.data[0].id)

      for (let i = 0; i < item.image.data.length; i++) {
        arr.push(item.image.data[i].id);
        arrurl.push(item.image.data[i].attributes.url);

        photo.push({
          id: item.image.data[i].id,
          url: item.image.data[i].attributes.url,
        });
      }

      setIndex(arr);
      setUrls(arrurl);
      setImages(photo);
    }
  }, [item]);
  useEffect(() => {
    if (index) {
      console.log("index", index);
    }
    if (urls) {
      console.log(urls);
    }

    if (images) {
      console.log(images);
    }
  }, [index, images]);

  const handleDelete = async (id, title) => {
    let pics = images;
    pics = pics.filter((image) => image.id !== id);
    let indecs = pics.map((p) => p.id);
    setIndex(indecs);
    setImages(pics);
    console.log(index);
  };




  const [uploadImages, { data }] = useMutation(UPLOAD_IMAGES);

  const updateImages = ({ target: { validity, files } }) => {
    if (validity.valid)
      uploadImages({
        variables: {
          files,
        },
        onCompleted: () => {
          console.log("uploaded images");
        },
      });
  };

  useEffect(() => {
    if (data !== undefined) {
      console.log("uploads", data.multipleUpload);
      setIDs(data.multipleUpload.map((item) => item.data.id));
      console.log("url", data.multipleUpload[0].data.attributes.url);
    }
  }, [data, urls]);

  useEffect(() => {
    if (ids.length > 0) {
      setIndex([...index, ...ids]);
    }
  }, [ids]);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  useEffect(()=>{
    const images = [];
  
    if (files) {
      for (const file of files) {
        images.push(file);
      }
      console.log("images",images);
      setSelectedImages(images);
  
    }
  },[files])

  useEffect(()=>{
if(selectedImages){
  console.log(selectedImages);
}
  },[selectedImages])
  const handleTempDelete=(id)=>{

   let ss = selectedImages.filter(index => index !==id);
    setSelectedImages(ss)
  }
  const selectImageToUpload = () => {
    const images = [];
    if (files) {
      for (const file of files) {
        images.push(URL.createObjectURL(file));
      }
   //   setSelectedImages(images);
    }
  };
  //  update category function

  const update = async (title) => {
   await uploadImages({variables:{files:selectedImages},onCompleted: () =>{console.log("uploaded")}})
    // await updateCategory({
    //   variables: { id: idx, image: index, title: title },
    //   onCompleted: () => {
    //     setResult("success");
    //     setInfo("category has been updated");
    //   },
    //   onError: () => {
    //     setResult("fail");
    //     setInfo("ERROR :category has not been updated");
    //   },
    // });
  };
  return (
    <div>
      {result === "" ? (
        ""
      ) : result === "success" ? (
        <div
          className='alert alert-success w-100 text-center my-2'
          role='alert'
        >
          {info}
        </div>
      ) : (
        result ===
        "fail"(
          <div className='alert alert-danger' role='alert'>
            {info}
          </div>,
        )
      )}

      <div className='product product-table'>
        <div className='title'>
          <h1 style={{ color: "", fontWeight: "bolder" }}> Update Category</h1>
        </div>
        <div style={{ display: "flex" }}>
          <form
            className='needs-validation mt-4'
            noValidate
            style={{ display: "flex", flexDirection: "column", width: "60%" }}
          >
            <Row className='mb-3 '>
              <Form.Group as={Col} md='12' controlId='validationCustom01'>
                <Form.Label className='label'>Title</Form.Label>

                <Form.Control
                  type='text'
                  placeholder={item.title}
                  onChange={(e) => changeTitle(e)}
                  value={title}
                />
                {/* <div className='invalid-feedback'>required</div>
              
                <div className='valid-feedback'>Looks good! </div> */}
                {/* {selectedImages&&selectedImages.map((image,index)=><img src={image} alt="kk" key ={index}/>)}  */}
              </Form.Group>
            </Row>
          </form>
        </div>
        <Form.Label className='label'>Images</Form.Label>




        {/* new images to upload */}

        <div
          style={{
            width: "65%",
            minWidth: "50%",
            margin: "10px ",
            padding: "40px",
            border: "2px solid #f3f3f3",
            borderRadius: "10px",
          }}
        >
          <div className='d-flex justiy-content-start flex-wrap gap-2 '>
            {selectedImages.map((image, index) => (
              <div
              
                key={index}
                style={{
                  height: "100px",
                  width: "100px",

                  backgroundColor: "#f3f3f3",
                  color: "grey",
                }}
              >
                <div
                  className='  d-flex  h-100'
                  style={{ position: "relative" }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",

                      paddingTop: "10px",
                    }}
                  >
                  
                   
                        <img
                          src={URL.createObjectURL(image)}
                          alt='hhh'
                          className='h-75 '
                          key={index}
                        />
                      
                  </div>
                  <button
                    className='btn btn-danger btn-sm  '
                     onClick={() => handleTempDelete(image)}
                    style={{ position: "absolute", top: "0px", right: 0 }}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
            {/*  button of addition  */}
            <div
              style={{
                height: "100px",
                width: "100px",
                margin: "auto",
                position: "relative",
              }}
            >
              <input
                type='file'
                id='images'
                multiple
                hidden
                accept='image/*'
              
               

                onChange={(e) => setFiles(e.target.files)}
              />

              {/* onChange={({ target: { validity, files } })=>updateImages({ target: { validity, files } })} */}

              {/* <Button onClick={selectImageToUpload}>Save</Button>  */}
              {/* <img src={URL.createObjectURL(files[0])} alt="hhh"  /> */}

              <label htmlFor='images'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='64'
                  height='64'
                  fill='currentColor'
                  className='bi bi-cloud-arrow-down-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z' />
                </svg>
                <p style={{ width: "80px" }}>Browse File to Upload</p>
              </label>
            </div>
            {/*  button of addition  */}
          </div>
        </div>
        {/* new images to upload */}

        {/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}

        {/* updated images after delete */}
        <div
          style={{
            width: "65%",
            minWidth: "50%",
            margin: "10px ",
            padding: "40px",
            border: "2px solid #f3f3f3",
            borderRadius: "10px",
          }}
        >
          <div className='d-flex justiy-content-start flex-wrap gap-2 '>
            {images.map((image, index) => (
              <div
                className=''
                key={index}
                style={{
                  height: "100px",
                  width: "100px",
                  //   borderLeft: "1px solid grey",
                  backgroundColor: "#f3f3f3",
                  color: "grey",
                  //   margin: "auto",
                }}
              >
                <div
                  className='  d-flex  h-100'
                  style={{ position: "relative" }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",

                      paddingTop: "10px",
                    }}
                  >
                    <img
                      src={`${urlx}${image.url}`}
                      alt='hhh'
                      className='h-75 '
                    />
                  </div>
                  <button
                    className='btn btn-danger btn-sm  '
                    onClick={() => handleDelete(image.id, title)}
                    style={{ position: "absolute", top: "0px", right: 0 }}
                  >
                    x
                  </button>
                </div>
              </div>
            ))}
            {/*  button of addition  */}
            {/* updated images after delete */}
            <div
              style={{
                height: "100px",
                width: "100px",
                margin: "auto",
                position: "relative",
              }}
            >
              <input
                type='file'
                id='images'
                multiple
                hidden
                accept='image/*'
                // style={{
                //   border: "none",
                //    borderRadius: "10%",
                //   // fontWeight: "800",
                //   fontSize: "20px",
                //   width: "100%",
                //   height: "40%",
                //   margin: "30px 0",
                // }}

                //     onChange={(e) => setFiles(e.target.files)}
                onChange={({ target: { validity, files } }) =>
                  updateImages({ target: { validity, files } })
                }
              />
              {/* <img src={URL.createObjectURL(files[0])} alt="hhh"  /> */}

              <label htmlFor='images'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='64'
                  height='64'
                  fill='currentColor'
                  className='bi bi-cloud-arrow-down-fill'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z' />
                </svg>
                <p style={{ width: "80px" }}>Browse File to Upload</p>
              </label>
            </div>
            {/*  button of addition  */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            borderTop: "1px solid #f3f3f3",
            marginTop: "20px",
          }}
        >
          <Button
            variant='danger '
            className='mt-4'
            onClick={() => update(title )}
          >
            UPDATE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateCategory;
