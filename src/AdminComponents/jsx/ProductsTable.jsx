import { Alert, Button, Container,  Table } from "react-bootstrap";
import ProductsRow from "./ProductsRow";
import React, { useContext,useState } from "react";
import warningContext from "../store/store";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setPageIncrement,setPageDecrement, setPageSize } from "../../redux/slice/paginationSlice";



function ProductsTable() {
const dispatch = useDispatch();  
const [currentPage, setCurrentPage] = useState(1);
const product=useSelector(state=>state.product.data)
const meta =useSelector(state=>state.product.meta)
//console.log("product",meta.pageCount,meta.pageSize,meta.total)





const handleIncrement = () => {
  if(currentPage<meta.pageCount ){
    setCurrentPage(currentPage + 1);
    dispatch(setPageIncrement())
  }
};
const handleDecrement = () => {
  if(currentPage>1){
    setCurrentPage(currentPage - 1);
    dispatch(setPageDecrement())
  }else{
    setCurrentPage(1) 
  dispatch(setPage(1))
  }
};

const handlePageSize=(e)=>{
  e.preventDefault()
 setCurrentPage(1)   
 dispatch(setPage(1))

//console.log(e.target.value)

dispatch(setPageSize(parseInt(e.target.value)))
}
  // apoloclient function for get product based on pagination parameters

  
 
  const { show } = useContext(warningContext);



  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error : {error.message}</p>;

  return (
    <div className='mt-4 '>
      {show === true ? (
        <Alert variant='success'>
          the product has been successfuly deleted !
        </Alert>
      ) : (
        ""
      )}
      <h3 className='text-center text-capitalize text-default my-4'>
        {" "}
        Products{" "}
      </h3>
      <div style={{width:"90%",margin:"auto"}}>
        {product.length > 0 ? (
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
                  <th scope='col' className='text-center'>
                    PRICE
                  </th>
                  <th className='text-center ' style={{ maxWidth: "200px" }}>
                    <Link to='/addproduct' className='btn btn-primary btn-sm'>
                      Add product
                    </Link>
                  </th>
                </tr>
              </thead>
              <tbody>
                {product &&
                  product.map((item, index) => (
                 
                    <ProductsRow key={index} index={index+meta.pageSize*(currentPage-1)} item={item} refs="/updateproduct/:" />
                  ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-between">
                <div>
                <label style={{fontWeight:"600",fontSize:"18px"}}>
                  select  count of items:
                  <select name="product" className="mx-2 p-2 " style={{fontSize:"14px",fontWeight:"800"}}onChange={(e)=>handlePageSize(e)}>
                    <option value="5" id="1" >5</option>
                    <option value="10" id="2">10</option>
                    <option value="20" id="3">20</option>
                  </select>
                  </label>
                </div>
            <div className="d-flex justify-content-end" >
            <Button onClick={handleDecrement} variant="dark" style={{fontSize:"20px", width:"40px"}} disabled={currentPage===1?true:false}>-</Button>
            <p className="px-3 " style={{fontSize:"20px",fontWeight:"700",marginTop:"5px"}}>{currentPage}</p>
            <Button onClick={handleIncrement} variant="dark"  style={{fontSize:"20px", width:"40px"}} disabled={currentPage===meta.pageCount?true:false}>+</Button>
          </div></div>
            </div>
        ) : (
          <Alert variant='danger'>No data were found !!</Alert>
        )}
      </div>

    </div>
  );
}

export default React.memo(ProductsTable) ;
