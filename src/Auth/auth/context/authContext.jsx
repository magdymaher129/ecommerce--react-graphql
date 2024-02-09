
import  { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(false);

// eslint-disable-next-line react/prop-types
 export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
   const[roles,setRoles]=useState(null);


  function setLogin  ()  {



       setIsAuthenticated(true)
   
   
  console.log(isAuthenticated)
  }

  function setLogout() {
   
     setIsAuthenticated(false)
  
  //  console.log(isAuthenticated);
   }

   function setAdmin  ()  {



    setIsAdmin(true)
    //setRoles(3)


}
function setUser  ()  {


 // setRoles(0)
  setIsAdmin(false)



}

  return (
    <AuthContext.Provider value={{ roles,setRoles,setLogin,setLogout,isAuthenticated,setAdmin,setUser,isAdmin  }}>
      {children}
    </AuthContext.Provider>
  )
};
export default AuthContext
