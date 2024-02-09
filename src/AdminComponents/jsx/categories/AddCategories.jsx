import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../styles/styles.module.css";
import { useMutation } from "@apollo/client";
import Add_Category from "../../gql/category/addCategory";
import { useState, useEffect } from "react";
import useCat from "../../hooks/useCat";
import Head from "../../panel/Head";
import SBar from "../../panel/SBar";

function AddCategories() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const { addNew, Change, data, result, info, setResult, setInfo, url } =
    useCat();
  const [item, setItem] = useState("");
  const [id, setId] = useState(null);
  const [createCategory] = useMutation(Add_Category);

  useEffect(() => {
    if (data) {
      setId(data.upload.data.id);
    }
  }, [data]);

  // ------ create category --------//

  const AddCat = async (e) => {
    e.preventDefault();
    if (id === null || item === "") {
      return;
    }
    await createCategory({
      variables: { title: item, image: id },
      onCompleted: () => {
        setResult("success");
        setInfo("category is available");
      },
      onError: () => {
        setResult("fail");
        setInfo("Failed to add category");
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
          <div className='alert alert-danger' role='alert'>
            {info}
          </div>
        )}

        <div className={styles.brandUpdateContainer}>
          <h2
            className={styles.brandUpdateTitle}
            style={{ color: "green", textTransform: "uppercase" }}
          >
            Add Category
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data ? (
              <img
                src={`${url}${data.upload.data.attributes.url}`}
                alt='gallery'
                width={100}
                height={150}
                style={{ margin: "auto ", borderRadius: "10px" }}
              />
            ) : (
              <div
                style={{
                  width: "0",

                  height: "0",
                }}
              ></div>
            )}

            <form
              className='needs-validation mt-4'
              novalidate
              onSubmit={(e) => AddCat(e)}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                margin: "auto",
              }}
            >
              <Row className='mb-3 '>
                <Form.Group as={Col} md='12' controlId='validationCustom01'>
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
              </Row>
              <Row className='mb-3 '>
                <Form.Group as={Col} md='12' controlId='validationCustom02'>
                  <Form.Label className={styles.label}>Image</Form.Label>
                  <Form.Control
                    required
                    type='file'
                    placeholder='Last name'
                    onChange={(e) => Change(e)}
                  />
                  <div className='invalid-feedback'>required</div>
                  <div className='valid-feedback'>Looks good! </div>
                </Form.Group>
              </Row>
              <row className={styles.controllers}>
                <Button variant='light' type='submit'>
                  Submit form
                </Button>
                <Button variant='light' onClick={addNew}>
                  {" "}
                  new category
                </Button>
              </row>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategories;
