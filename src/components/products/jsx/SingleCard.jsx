/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";
import  "../css/card.css"
function SingleCard({ product }) {
  const url = import.meta.env.VITE_App_URL;

  return (
 
      <div className="card" style={{width: "300px"}}
     
      >
         <div className="d-flex justify-content-center">
         <div className="row " style={{height: "250px", overflow: "hidden"}}>
          <div className="col-12  ">

          {product.attributes?.image?.data[0]&&<img src={url + product.attributes.image?.data[0].attributes?.url} alt="image" className=" img-fluid"/>}  
          </div>

        </div>
      </div>
      <div className="card-body" >
        <h5 className="card-title d-flex justify-content-between">

        {product.attributes.title.substring(0,20)}...

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
    {/* <Card.Img
          variant='top'
          src={url + product.attributes.image.data[0].attributes.url}
          style={{ height: "300px", maxWidth: "250px", marginTop: "15px",margin: "auto" }}
        />
        <Card.Body className="card-details">
          <Card.Title style={{ marginLeft: "10px" }}>
            {product.attributes.title.substring(0,20)}...
          </Card.Title>

          <strong>
            {" "}
            <p  className="card-price" 
             </div> style={{
              //   maxWidth: "250px",
              //   fontSize: "18px",
              //   color: "grey",
              //   marginLeft: "30px",
              // }}
            >
          //     Price: ${product.attributes.price}
          //   </p>
          // </strong>

        //  <Link to={`/product/:${product.id}`} >  <Button
        //     variant='primary'className="card-button"
          
        //   >
      //       more details
      //     </Button></Link>
      //   </Card.Body>
      // </Card>
    // </div>*/}