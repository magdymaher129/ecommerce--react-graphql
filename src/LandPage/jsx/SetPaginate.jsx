
import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPage,
  setPageDecrement,
  setPageIncrement,
} from "../../redux/slice/paginationSlice";
import { Button } from "react-bootstrap";

function   SetPaginate() {





  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const meta = useSelector((state) => state.product.meta)
  const pagecount = useSelector((state) => state?.pagination)
  console.log("pagecount",pagecount)

  const handleIncrement = () => {
    if (currentPage < Math.ceil(meta?.pagination?.total/6)) {
      setCurrentPage(currentPage + 1);
      dispatch(setPageIncrement());
    }
  };
  const handleDecrement = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      dispatch(setPageDecrement());
    } else {
      setCurrentPage(1);
      dispatch(setPage(1));
    }
  };

  return (
    <div className='d-flex justify-content-center my-3'>
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
        style={{ fontSize: "20px", fontWeight: "700", marginTop: "5px" }}
      >
        {currentPage}
      </p>
      <Button
        onClick={handleIncrement}
        variant='dark'
        style={{ fontSize: "20px", width: "40px" }}
        disabled={currentPage === Math.ceil(meta?.total/6) ? true : false}
      >
        +
      </Button>
    </div>
  );
}

export default  React.memo(SetPaginate);
