
import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hook/useAuth'
import useValidate from '../hook/useValidate'


// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({role}) => {
 //const {roles}= useValidate()

 let Role = role==localStorage.getItem('role') 

    return(
       Role? <Outlet  state={{ from: location }} replace /> 
           :  <Navigate to="/login" />
    )
}

export default PrivateRoutes