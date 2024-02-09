/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";
import  "../css/card.css"


function SingleCard({ product }) {

  const url = import.meta.env.VITE_APP_URL;

  return (
 
      <div className="card" style={{width: "300px" ,backgroundColor:"#f3f3f3"}}
     
      >
         <div className="d-flex justify-content-center">
         <div className="row " style={{height: "250px", overflow: "hidden"}}>
          <div className="col-12  ">

         {product.attributes.image &&<img src={url + product?.attributes.image.data[0]?.attributes.url} alt="image" className=" img-fluid"/>}   
        </div>

        </div>
      </div>
      <div className="card-body" >
        <h5 className="card-title d-flex justify-content-between">

        {product.attributes.title}...

        </h5>
        <span style={{fontSize:" 16px", color:"cornflowerblue",display: "flex",justifyContent:"space-between"}}> <strong>price:
         ${product.attributes.price}</strong><del>  ${product.attributes.price+12}</del></span>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, eaque.</p>
        <Link to={`/product/:${product.id}`}  className="btn btn-primary d-flex justify-content-center" style={{ flexGrow:"1"}}>see
          more</Link>
      </div>
    </div>

    
    )
}

export default SingleCard;
  