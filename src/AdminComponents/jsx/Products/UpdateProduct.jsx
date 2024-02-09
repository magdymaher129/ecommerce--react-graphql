import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import "../../css/category.css";
import { useMutation, useQuery } from "@apollo/client";
import { useState, useEffect, useContext } from "react";
import useCat from "../../hooks/useCat";
import Add_Product from "../../gql/products/addProduct";
import GET_Category from "../../gql/category/getCategories";
import GET_Sizes from "../../gql/sizes/getSizes";
import Select from "react-dropdown-select";
// import GET_Colors from "../../gql/colors/getColors";
import ColorSelect from "./ColorSelect";
import { productContext } from "../../../App";
import SizeSelect from "./SizeSelect";
import useProduct from "../../hooks/useProduct";
import UPLOAD_IMAGES from "../../gql/upload/uploadImages";
import Slider from "./Slider";
import GET_SINGLE_PRODUCT from "../../gql/products/getSingleProduct";

function UpdateProduct() {
    const { addNew, result, info, setResult, setInfo, url } = useProduct();
    const [item, setItem] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    const [id, setId] = useState([]);
    const [ids, setIDs] = useState([]);
    const [cats, setCats] = useState([]);
    const [selectedCats, setSelectedCats] = useState();
  
    // const [createProduct] = useMutation(Add_Product);
    const { data: products, loading, error } = useQuery(GET_Category);
  
    const { data: SIZES } = useQuery(GET_Sizes);

    const { color, setColor, size, setSize } = useContext(productContext);

    // const [uploadImages, { data }] = useMutation(UPLOAD_IMAGES);
  const {data,loading:load,error:err} =useQuery(GET_SINGLE_PRODUCT,{variables:{id:1}})
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

  
    // const AddProduct = async (e) => {
     
    //   e.preventDefault();
  
    //   if (item === "" || id === null) {
    //     return;
    //   }
 
  
    //   await createProduct({
    //     variables: {
    //       title: item,
    //       image: ids,
    //       price: price,
    //       sizes: size,
    //       colors: color,
    //       desc: desc,
    //       categories: selectedCats,
    //     },
    //     onCompleted: () => {
    //       setResult("success");
    //       setInfo("product is available");
    //     },
    //     onError: () => {
    //       setResult("fail");
    //       setInfo("Failed to add product");
    //     },
    //   });
    // };
 






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
      <div className='alert alert-danger text-center my-2' role='alert'>
        {info}
      </div>
    )}

    <div className=' product-table '>
      <div className='title'>
        <h1>Update Product</h1>
      </div>
      <div style={{ display: "flex", gap:"40px"}}>
        {data ? (
        //   <Slider  images={data.multipleUpload}  url={url}/>
        <img src="" alt="bbb" />
        ) : (
 
          <div
            style={{
              margin: "30px 100px 20px 100px",
              borderRadius: "20px",
              width: "300px",
              height: "400px",
            }}
          ></div>
        )}
        <form
          className='needs-validation'
          noValidate
        //   onSubmit={(e) => AddProduct(e)}
          style={{ display: "flex", flexDirection: "column", width: "60%" }}
        >
          <Row className='mb-2 '>
            <Form.Group as={Col} md='7' controlId='validationCustom01'>
              <Form.Label className='label'>Title</Form.Label>

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

            <Form.Group as={Col} md='5' controlId='validationCustom01'>
              <Form.Label className='label'>Price</Form.Label>

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
              <Form.Label className='label'>Category</Form.Label>
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
              <Form.Label className='label'>Sizes</Form.Label>
   
              <SizeSelect />
            </div>


            {/* color */}
            <div style={{ width: "100%" }}>
              <Form.Label className='label'>Color</Form.Label>

              <ColorSelect />
            </div>
          </div>

          {/* image */}

          <Row className='mb-2 '>
            <Form.Group as={Col} md='12' controlId='validationCustom02'>
              <Form.Label className='label'>Image</Form.Label>
              <Form.Control
                required
                type='file'
                multiple
                placeholder='Last name'
                // onChange={({ target: { validity, files } }) => {
                //   if (validity.valid)
                //     uploadImages({
                //       variables: {
                //         files,
                //       },
                //       onCompleted: () => {
                //         console.log("uploaded images");
                //       },
                //     });
                // }}
              />
              <div className='invalid-feedback'>required</div>
              <div className='valid-feedback'>Looks good! </div>
            </Form.Group>
          </Row>

          <Row className='mb-2 '>
            <Form.Label className='label'>description</Form.Label>
            <FloatingLabel controlId='floatingTextarea2' label='description'>
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
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
            }}
          >
            <Button
              variant='light'
              type='submit'
              style={{ fontWeight: "600" }}
            >
              Submit form
            </Button>
        
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default UpdateProduct