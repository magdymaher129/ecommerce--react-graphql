import { Button } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
function Submit({submitHandler}) {

  return (
    
   <div className="d-flex justify-content-center pt-4">
          <Button variant='success' type='submit' size="lg" onClick={submitHandler}>
            <span style={{fontWeight:"bold"}}>signIn</span>
          </Button>
          </div>
     
  )
}

export default Submit