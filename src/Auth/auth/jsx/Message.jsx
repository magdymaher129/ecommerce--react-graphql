import React from 'react'
import { Alert } from 'react-bootstrap'

// eslint-disable-next-line react/prop-types
function Message({msg,start}) {
  return (
    <>
       {msg && start && <Alert variant='danger'>{msg}</Alert>}
    </>
  )
}

export default Message