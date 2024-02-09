import React from "react";


function Slider({images,url}){
  return (

    <div id="carouselExample" className="carousel slide bg-default "  style={{width:"90%",height:"200px",margin:"auto",borderRadius:"20px"}}>
 
    <div className="carousel-inner " >
{images&& images.map(image=>
    <div className="carousel-item active">
      <img src={`${url}${image.data.attributes.url}`} className="d-block  p-2" alt="..."style={{margin:"auto",width:"120px", height:"150px" ,borderRadius:"20px"}}/>
    </div> )}

  </div>
  <button className="carousel-control-prev  "  type="button"  data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span className="visually-hidden ">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon"  aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Slider;
