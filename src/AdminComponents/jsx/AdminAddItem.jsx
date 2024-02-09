import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminAddItem() {
  return (
    <Container style={{height:"auto",}}>
       
    <h2 className="text-center my-4">Add New Item</h2>
    <Link to="/" className="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></Link>
    <form className="form-horizontal d-flex" style={{width:"100",border:"1px solid grey", padding:"20px",height:"fit-content",flexWrap:"wrap",backgroundColor:"azure"}}>
      <div className="col-sm-6">
        <div className="form-group">
          <label className="control-label col-sm-4">Partner Name</label>
          <div className="col-sm-8">
            <input type="text" className="form-control"/>
          </div>
        </div>
    
    
        <div className="form-group">
          <label className="control-label col-sm-4">Partner Legal Name</label>
          <div className="col-sm-8">
            <input type="text" className="form-control"/>
          </div>
        </div>
      </div>
    
      <div className="col-sm-6">
        <div className="form-group">
          <label className="control-label col-sm-4">Partner Email ID</label>
          <div className="col-sm-8">
            <input type="text" className="form-control"/>
          </div>
        </div>
    
        <div className="form-group">
          <label className="control-label col-sm-4">Partner Mobile</label>
          <div className="col-sm-8">
            <input type="text" className="form-control"/>
          </div>
        </div>
      </div>
    
      <div className="col-sm-12">
        <div className="form-group">
          <label className="control-label col-sm-2">Partner Address</label>
          <div className="col-sm-4">
            <textarea type="text" className="form-control" rows="2"></textarea>
          </div>
        </div>
      </div>
    
    
      <div className="col-sm-6">
        <div className="form-group">
          <label className="col-sm-4 control-label">Contract Start Date</label>
          <div className="col-sm-8">
            <input type="text" className="date-start ml-5 form-control datepicker" placeholder="Date Start"/>
          </div>
        </div>
      </div>
    
      <div className="col-sm-6">
        <div className="form-group">
          <label className="col-sm-4 control-label">Contract Expiry Date</label>
          <div className="col-sm-8">
            <input type="text" className="date-end ml-5 form-control datepicker col-sm-8" placeholder="Date End"/>
          </div>
        </div>
      </div>
    
      <div className="col-sm-6">
        <div className="form-group">
          <label className="col-sm-4 control-label">Minimum Loan Amount</label>
          <div className="col-sm-8">
            <input type="text" className="form-control"/>
          </div>
        </div>
      </div>
      
      <div className="col-sm-6">
        <div className="form-group">
          <label className="col-sm-4 control-label">Maximum Loan Amount</label>
          <div className="col-sm-8">
            <input type="text" className="form-control"/>
          </div>
        </div>
      </div>
    
      <div className="col-sm-6">
        <div className="form-group">
          <label className="col-sm-4 control-label">Interest Rate</label>
        <div className="col-sm-8">
            <input type="text" className="form-control"/>
          </div>
        </div>
      </div>
    
      <div className="col-sm-6">
        <div className="form-group">
          <label className="col-sm-4 control-label">Deposit Amount</label>
        <div className="col-sm-8">
            <input type="text" className="form-control"/>
          </div>
        </div>
      </div>
    
      <div className="text-center ">
        <button className="btn btn-primary waves-effect waves-light mt-4 "  style={{ margin:"auto"}}id="btn-submit">Add item</button>
      </div>
      <input type="hidden" name="action" id="action" value="event_dialog_add_newpartnerdata" />
    </form></Container>
  )
}

export default AdminAddItem