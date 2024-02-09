import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
// import "../../css/category.css";
import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect, useContext } from "react";
import styles from "../styles/styles.module.css";
import Add_Product from "../../gql/products/addProduct";
import GET_Category from "../../gql/category/getCategories";
import GET_Sizes from "../../gql/sizes/getSizes";

// import GET_Colors from "../../gql/colors/getColors";
import ColorSelect from "./ColorSelect";
import { productContext } from "../../../App";
import SizeSelect from "./SizeSelect";
import useProduct from "../../hooks/useProduct";
import UPLOAD_IMAGES from "../../gql/upload/uploadImages";
import Slider from "./Slider";
// import {Example} from "../../../Example";
import Head from "../../panel/Head";
import SBar from "../../panel/SBar";

function AddProducts() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const { addNew, result, info, setResult, setInfo, url } = useProduct();
  const [item, setItem] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [id, setId] = useState([]);
  const [ids, setIDs] = useState([]);
  const [cats, setCats] = useState([]);
  const [selectedCats, setSelectedCats] = useState();

  const [createProduct] = useMutation(Add_Product);
  const { data: products, loading, error } = useQuery(GET_Category);

  const { data: SIZES } = useQuery(GET_Sizes);


  const { color, setColor, size, setSize } = useContext(productContext);
 
  const [uploadImages, { data }] = useMutation(UPLOAD_IMAGES);

  useEffect(() => {
    if (data) {

      console.log(data.multipleUpload);
      const ids = data.multipleUpload.map((value) => value.data.id);
      setIDs(ids);
    }
  }, [data]);

  useEffect(() => {
    if (products) {
      setCats(products.categories.data);
    }
  }, [products]);


  const AddProduct = async (e) => {
    // let select = [];
    e.preventDefault();

    if (item === "" || id === null) {
      return;
    }


    await createProduct({
      variables: {
        title: item,
        image: ids,
        price: price,
        sizes: size,
        colors: color,
        desc: desc,
        categories: selectedCats,
      },
      onCompleted: () => {
        setResult("success");
        setInfo("product is available");
      },
      onError: () => {
        setResult("fail");
        setInfo("Failed to add product");
      },
    });
  };

  return (
    <div className='grid-Product'>
      <Head OpenSidebar={OpenSidebar} />
      <SBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
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
          <div className='alert alert-danger text-center my-2' role='alert'>
            {info}
          </div>
        )}

        <div className={styles.brandUpdateContainer}>
          <h2
            className={styles.brandUpdateTitle}
            style={{ color: "green", textTransform: "uppercase" }}
          >
            Add Product
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {data ?(
              <Slider images={data.multipleUpload} url={url} />
            ) : (
              
              <div
                style={{
                  margin: "auto",
                  borderRadius: "20px",
                  width: "0%",

                  height: "0px",
                }}
              ></div>
            )}
            <form
              className='needs-validation'
              noValidate
              onSubmit={(e) => AddProduct(e)}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Row className='mb-2 '>
                <Form.Group as={Col} controlId='validationCustom01'>
                  <Form.Label className={styles.label}>Title</Form.Label>

                  <Form.Control
                    required
                    type='text'
                    placeholder='Title ..'
                    onChange={(e) => setItem(e.target.value)}
                    value={item}
                  />
                  <div className='invalid-feedback'>required</div>
                  <div className='valid-feedback'>Looks good! </div>
                </Form.Group>

                <Form.Group as={Col} md='6' controlId='validationCustom01'>
                  <Form.Label className={styles.label}>Price</Form.Label>

                  <Form.Control
                    required
                    type='number'
                    step='0.01'
                    placeholder='price ..'
                    onChange={(e) => setPrice(e.target.valueAsNumber)}
                    value={price}
                  />
                  <div className='invalid-feedback'>required</div>
                  <div className='valid-feedback'>Looks good! </div>
                </Form.Group>
              </Row>

              {/* category */}
              <div
                className='mb-2'
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div style={{ width: "100%" }}>
                  <Form.Label className={styles.label}>Category</Form.Label>
                  <Form.Select
                    aria-label=' select Category'
                    onChange={(e) => setSelectedCats(e.target.value)}
                  >
                    <option>Select Category</option>
                    {cats &&
                      cats.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.attributes.title}
                        </option>
                      ))}
                  </Form.Select>
                </div>

                {/* sizes */}
                <div style={{ width: "100%" }}>
                  <Form.Label className={styles.label}>Sizes</Form.Label>
                  {/* <Select
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                  name='Select'
                  options={items}
                  labelField='label'
                  valueField='id'
                  multi
                  onChange={(value) => setValues(value)}
                ></Select> */}
                  <SizeSelect />
                </div>
                {/* color */}
                <div style={{ width: "100%" }}>
                  <Form.Label className={styles.label}>Color</Form.Label>

                  <ColorSelect />
                </div>
              </div>

              {/* image */}

              <Row className='mb-2 '>
                <Form.Group as={Col} md='12' controlId='validationCustom02'>
                  <Form.Label className={styles.label}>Image</Form.Label>
                  <Form.Control
                    required
                    type='file'
                    multiple
                    placeholder='file'
                    onChange={({ target: { validity, files } }) => {
                      if (validity.valid)
                        uploadImages({
                          variables: {
                            files,
                          },
                          onCompleted: () => {
                            console.log("uploaded images");
                          },
                        });
                    }}
                  />
                  <div className='invalid-feedback'>required</div>
                  <div className='valid-feedback'>Looks good! </div>
                </Form.Group>
              </Row>

              <Row className='mb-2 '>
                <Form.Label className={styles.label}>description</Form.Label>
                <FloatingLabel
                  controlId='floatingTextarea2'
                  label='description'
                >
                  <Form.Control
                    as='textarea'
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                    placeholder='Leave a description here'
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Row>

              <div
                className={styles.controllers}
               
              >
                <Button
                  variant='light'
                  type='submit'
                  style={{ fontWeight: "600" }}
                >
                  Submit form
                </Button>
                <Button
                  variant='light'
                  onClick={addNew}
                  style={{ fontWeight: "600" }}
                >
                  {" "}
                  New Product
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
