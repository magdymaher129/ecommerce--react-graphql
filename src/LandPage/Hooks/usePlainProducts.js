import { gql, useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../filter/gql/getProducts";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  setProductData } from "../../redux/slice/productSlice";

export const GET_All_PRODUCTS = gql`
  query getProduct {
    products {
      data {
        id
        attributes {
          title
          price
          sizes {
            data {
              id
              attributes {
                title
              }
            }
          }
          categories {
            data {
              id
              attributes {
                title
              }
            }
          }
          brands {
            data {
              id
              attributes {
                title
              }
            }
          }
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
          colors {
            data {
              id
              attributes {
                title
              }
            }
          }
          desc
          brands {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
          pageSize
          pageCount
        }
      }
    }
  }
`;

const usePlainProducts = () => {
  const pageSize=7
  const currentPage=1

  
  const {data:obj, loading, error} = useQuery(GET_All_PRODUCTS );
   
 
    if(obj)   console.log("obj",obj)

   
  
  const [plainData, setPlainData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
 if(obj){
    const transformedObj = {
      data: {
        products: {
          data: obj.products.data.map((product) => ({
            id: product.id,
            title: product.attributes.title,
            price: product.attributes.price,
            brands: product.attributes.brands.data.map(
              (brand) => brand?.attributes?.title,
            ),
            brandID: product.attributes?.brands?.data?.map((brand) => brand.id),
            category: product.attributes?.categories?.data?.map(
              (category) => category?.attributes?.title,
            ),
            categoryID: product.attributes?.categories?.data?.map(
              (category) => category.id,
            ),
            color: product.attributes.colors?.data?.map(
              (color) => color.attributes.title,
            ),
            colorID: product.attributes?.colors?.data.map((color) => color.id),
            size: product.attributes.sizes?.data.map(
              (size) => size.attributes.title,
            ),
            sizeID: product.attributes.sizes?.data.map((size) => size.id),
            image: product.attributes.image.data.map(
              (image) => image.attributes.url,
            ),
          })),
        },
      },
    };
    const x = transformedObj;
    setPlainData(x.data.products.data);
  }
  }, [obj]);

  useEffect(() => {
    if (plainData) {
      dispatch(setProductData(plainData));
    }
  }, [dispatch, plainData]);
 return {plainData}
};

export default usePlainProducts;
