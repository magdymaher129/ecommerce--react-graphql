import { useParams } from "react-router-dom";
import "../css/product.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";
import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export const productByID = gql`
  query getProduct($id: ID!) {
    product(id: $id) {
      data {
        id
        attributes {
          title
          price
          sizes {
            data {
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
        }
      }
    }
  }
`;
function ProductDetails() {
  const url = "http://localhost:1337";
  let { id } = useParams();
  const idx = id.replace(":", "");
  const { data, loading, error } = useQuery(productByID, {
    variables: { id: idx },
  });
  const [product, setProduct] = useState("");
  console.log(data);

  return (
    <div
      className='container mt-5 mb-5'
      style={{ minHeight: "calc(100vh - 150px)" }}
    >
      <div className='row d-flex justify-content-center'>
        <div className='col-md-10'>
          <div className='card'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='images p-3'>
                  <div className='text-center p-4'>
                    {" "}
                    <img
                      id='main-image'
                      src={
                        data &&
                        url +
                          data.product.data.attributes.image.data[0].attributes
                            .url
                      }
                      width='250'
                    />{" "}
                  </div>
                  <div className='thumbnail text-center'>
                    {" "}
                    <img src='#' width='70' /> <img src='#' width='70' />{" "}
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='product p-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                      {" "}
                      <MdKeyboardBackspace
                        style={{ fontWeight: "700", fontSize: "20px" }}
                      />{" "}
                      <span className='ml-1'>Back</span>{" "}
                    </div>
                    <FaShoppingCart />
                  </div>
                  <div className='mt-4 mb-3'>
                    {" "}
                    <span className='text-uppercase text-muted brand'>
                      Orianz
                    </span>
                    <h5 className='text-uppercase'>
                      {data && data.product.data.attributes.title}
                    </h5>
                    <div className='price d-flex flex-row align-items-center'>
                      {" "}
                      <span className='act-price'>
                        ${data && data.product.data.attributes.price}
                      </span>
                      <div className='ml-2'>
                        {" "}
                        <small className='dis-price'>
                          {" "}
                          ${" "}
                          {data &&
                            parseFloat(data.product.data.attributes.price) + 30}
                        </small>{" "}
                        <span>40% OFF</span>{" "}
                      </div>
                    </div>
                  </div>
                  <p className='about'>
                    Shop from a wide range of t-shirt from orianz. Pefect for
                    your everyday use, you could pair it with a stylish pair of
                    jeans or trousers complete the look.
                  </p>
                  <div className='sizes mt-5'>
                    <h6 className='text-uppercase'>Size</h6>{" "}
                    <label className='radio'>
                      {" "}
                      <input type='radio' name='size' value='S' checked />{" "}
                      <span>S</span>{" "}
                    </label>{" "}
                    <label className='radio'>
                      {" "}
                      <input type='radio' name='size' value='M' />{" "}
                      <span>M</span>{" "}
                    </label>{" "}
                    <label className='radio'>
                      {" "}
                      <input type='radio' name='size' value='L' />{" "}
                      <span>L</span>{" "}
                    </label>{" "}
                    <label className='radio'>
                      {" "}
                      <input type='radio' name='size' value='XL' />{" "}
                      <span>XL</span>{" "}
                    </label>{" "}
                    <label className='radio'>
                      {" "}
                      <input type='radio' name='size' value='XXL' />{" "}
                      <span>XXL</span>{" "}
                    </label>
                  </div>
                  <div className='cart m-4 align-items-center d-flex'>
                    {" "}
                    <button className='btn btn-danger text-uppercase mr-2 '>
                      Add to cart
                    </button>{" "}
                    <AiOutlineHeart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
