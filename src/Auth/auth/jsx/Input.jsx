
import { Form } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
function Input({changeHandler,type,name}) {

  
  return (
    <>
   <label htmlFor='usenName' className='pb-2'>{name}</label>
          <Form.Control
            size='lg'
            type={type}
            name={name}
            placeholder={name}
            onChange={(e) => changeHandler(e)}
          />
         <br/>

    </>
  )
}

export default Input