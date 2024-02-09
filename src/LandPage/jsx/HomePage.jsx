import React from "react";
import { Container } from "react-bootstrap";
import StoreProducts from "./StoreProducts";
import LazyProducts from "./LazyProducts";
import useInits from "../../AdminComponents/hooks/useInit";
import PageFooter from "./PageFooter";
// import SetPaginate from "./SetPaginate";
// import PagePaginate from "./PagePaginate";
// import useAllProducts from "../Hooks/useAllProducts";
import { useDispatch } from "react-redux";
import { setPage, setPageDecrement, setPageIncrement } from "../../redux/slice/paginationSlice";
// import Login from "../../Auth/Login";

// eslint-disable-next-line react/prop-types
function HomePage({products,page}) {
  const dispatch =useDispatch()
// eslint-disable-next-line react/prop-types
let AllPage=products?.products?.meta?.pagination?.pageCount
  const handleInc=()=>{
    if(page<AllPage)
    dispatch(setPageIncrement())
  }

  const handleDec=()=>{
    if(page>1)
    dispatch(setPageDecrement())
  }
useInits()
// useAllProducts()
  return (
    <>
      <Container
        fluid
        style={{ display: "flex", marginTop: "40px", minHeight: "100vh" }}
      >
        <div>
          <LazyProducts />
        </div>
        <div style={{ marginLeft: "40px" }}>
          <StoreProducts products={products} />
        </div>
      </Container>

      <div style={{ marginTop: "10px" }}>
        {/* <Paginate /> */}
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button
            onClick={handleDec}
            style={{ height: "50px", padding: "10px" }}
          >
            -
          </button>
          <span style={{ height: "50px", padding: "10px" }}>{page}</span>
          <button
            onClick={handleInc}
            style={{ height: "50px", padding: "10px" }}
          >
            +
          </button>
        </div>
        {/* <Login/> */}
        {/* <SetPaginate/>
        <PagePaginate/> */}
        <PageFooter style={{ zIndex: 90 }} />
      </div>
    </>
  );
}

export default HomePage;
