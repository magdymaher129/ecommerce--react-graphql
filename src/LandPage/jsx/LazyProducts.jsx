import React, { Suspense } from "react";

// import useAllProducts from './services/useAllProducts';
// import { GET_PRODUCTS } from './gql/getProducts';
// import { useQuery } from '@apollo/client';

const LazyCategories = React.lazy(() => import("./Categories"));
const LazyColors = React.lazy(() => import("./Colors"));
const LazySizes = React.lazy(() => import("./Sizes"));

function LazyProducts() {
  // if(loading){
  //     <p>LOADING........</p>
  // }
  // if(error){
  //     <p>ERROR........</p>
  // }
  return (
    <div style={{ marginBottom: "50px", marginRight: "10px" }}>
      <div style={{ margin: "auto", display: "flex", gap: "10px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ margin: "12px" }}>FILTERS</h1>
          <Suspense fallback={<div>Loading Menu...</div>}>
            <LazyCategories />
            <LazyColors />
            <LazySizes />
          </Suspense>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default React.memo(LazyProducts);
