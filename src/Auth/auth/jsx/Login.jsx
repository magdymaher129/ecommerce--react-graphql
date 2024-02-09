import React from 'react'
import { AuthForm } from './Auth'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='d-flex justify-content-center py-4'>
   
    <AuthForm label='Login'  />
   </div>
  )
}

export default React.memo(Login)