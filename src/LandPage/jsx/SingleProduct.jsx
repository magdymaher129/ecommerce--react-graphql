import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../css/singleProduct.css";
import { useCart } from "react-use-cart";
import PageFooter from "./PageFooter";

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
          colors {
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

function SingleProduct() {
  const [indexx, setIndexx] = useState(0);
const url = import.meta.env.VITE_APP_URL

  let { id } = useParams();
  const idx = id.replace(":", "");
  const { data, loading, error } = useQuery(productByID, {
    variables: { id: idx },
  });

  // const [productID, setProductID] = useState("");

  const { addItem} = useCart();
  const navigate = useNavigate();

  const handleItem =  () => {
    if (data) {
      // console.log(data.product.data.id);
      const prod = {
        id: data.product.data.id,
        item: data.product.data,
        price: data.product.data.attributes.price,
        title: data.product.data.attributes.title,
        color: "red",
        size: "small",
        image: data.product.data.attributes.image.data[0].attributes.url,
      };

      console.log("prod", prod);
      if(prod){
    addItem(prod);
      navigate("/shoppingcart");
      }

    }
  };
  return (
    <>
    <div className='product-main'>
      <div className='left-side'>
        <img
          src={
            data &&
            url + data?.product?.data?.attributes?.image?.data[indexx].attributes?.url
          }
          alt=''
        />
      </div>
      <div className='right-side'>
        <div className='product-header'>
          <h2>{data && data.product.data.attributes.title}</h2>
          <p className='product-price'>
            ${data && data.product.data.attributes.price}
          </p>
        </div>
        <div className='product-colors'>
          {data &&
            data.product.data.attributes.colors.data.map((item, index) => (
              <p
                className={`product-color ${item.attributes.title}`}
                key={index}
              ></p>
            ))}
        </div>
        <p className='product-desc'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aperiam
          qui voluptate amet ipsa temporibus nostrum quibusdam, laborum
          blanditiis exercitationem nisi adipisci recusandae? Possimus repellat
          quaerat, sint adipisci ipsa animi.
        </p>
        <div className='product-colors'>
          {data &&
            data.product.data.attributes.sizes.data.map((item, index) => (
              <p className='product-size ' key={index}>
                {item.attributes.title}
              </p>
            ))}
        </div>
        <div className='product-images' >
          {data &&
            data?.product?.data?.attributes?.image.data.map((item, index) => (
              <div key={index}>
                <img
                  src={url + item.attributes.url}
                  className='product-image '
                  onClick={() => setIndexx(index)}
                />
              </div>
            ))}
        </div>

        <div>
          <Button
            variant='danger'
            className='my-4 px-4 '
            style={{ maxWidth: "300px" }}
            onClick={handleItem}
          >
          
            ADD TO CART
          </Button>
        </div>
      </div>

 
    </div>
         <PageFooter style={{ zIndex: 90 }} /></>
  );
}

export default SingleProduct;
