import { Alert, Button, Container, NavLink, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryRow from "./CategoryRow";
import {
  setCatDecrement,
  setCatIncrement,
  setCatPage,
  setCatSize,
  
} from "../../../redux/slice/paginationSlice";
import { useDispatch, useSelector } from "react-redux";

function CategoryTable() {
  let page_size=import.meta.env.VITE_APP_PAGE_SIZE
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(page_size);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.category.data);
  const meta = useSelector((state) => state.category.meta);
  //console.log("metaCategory", meta.pageSize, meta.pageCount, meta.total);

  //parameter of pagination

  const handleIncrement = () => {
    if (currentPage < meta.pageCount) {
      setCurrentPage(currentPage + 1);
      dispatch(setCatIncrement());
      console.log(meta)
    }
  };
  const handleDecrement = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      dispatch(setCatDecrement());
    } else {
      setCurrentPage(1);
      dispatch(setCatPage(1));
    }
  };

  const handlePageSize = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(setCatPage(1));
    dispatch(setCatSize(parseInt(e.target.value)));
  };
 





  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error : {error.message}</p>;
  return (
    <div className='mt-4'>
      {/* {show === true ? (
      <Alert variant='success'>
        the product has been successfuly deleted !
      </Alert>
    ) : (
      ""
    )} */}
      <h3 className='text-center text-capitalize text-default my-4'>
        {" "}
        Category{" "}
      </h3>
      <Container className=' w-75'>
        {items.length > 0 ? (
          <div>
            <Table
              className='table table-dark table-striped table-bordered '
              style={{
                fontSize: "22px",
                fontWeight: "600",
                boxShadow: "1px 1px grey",
              }}
            >
              <thead className='table-light '>
                <tr>
               
                  <th scope='col' className='text-center'>
                    #
                  </th>
                  <th scope='col'>TITLE</th>
                  <th scope='col' className='text-center'>
                    ID
                  </th>

                  <th className='text-center ' style={{ maxWidth: "200px" }}>
                    <Link to='/addcat' className='btn btn-primary btn-sm'>
                      Add category
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {items &&
                  items.map((item, index) => (
                    <CategoryRow
                      key={index}
                      index={index + meta.pageSize * (currentPage - 1)}
                      item={item}
                      refs='/updatecat/:'
                    />
                  ))}
              </tbody>
            </Table>
            <div className='d-flex justify-content-between'>
              <div>
                <label style={{ fontWeight: "600", fontSize: "18px" }}>
                  select count of items:
                  <select
                    name='category'
                    className='mx-2 p-2 '
                    style={{ fontSize: "14px", fontWeight: "800" }}
                    onChange={(e) => handlePageSize(e)}
                  >
                    <option value='5' id='1'>
                      5
                    </option>
                    <option value='10' id='2'>
                      10
                    </option>
                    <option value='20' id='3'>
                      20
                    </option>
                  </select>
                </label>
              </div>
              <div className='d-flex justify-content-end'>
                <Button
                  onClick={handleDecrement}
                  variant='dark'
                  style={{ fontSize: "20px", width: "40px" }}
                  disabled={currentPage === 1 ? true : false}
                >
                  -
                </Button>
                <p
                  className='px-3 '
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginTop: "5px",
                  }}
                >
                  {currentPage}
                </p>
                <Button
                  onClick={handleIncrement}
                  variant='dark'
                  style={{ fontSize: "20px", width: "40px" }}
                  disabled={currentPage === meta.pageCount ? true : false}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <Alert variant='danger'>No data were found !!</Alert>
        )}
      </Container>
    </div>
  );
}

export default React.memo(CategoryTable);
