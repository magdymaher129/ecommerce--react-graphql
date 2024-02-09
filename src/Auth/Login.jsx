import React, { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider, useLazyQuery, useMutation } from '@apollo/client';
import LOGIN_USER from './gql/login';
import GET_USER_ROLE from './gql/getUserRole';


function Login() {


let ID

const [userID,setUserID]=useState(0)
        const [identifier, setIdentifier] = useState('');
        const [password, setPassword] = useState('');
        const [provider, setProvider] = useState('local'); // Change the default provider as needed
    
        const [loginUser] = useMutation(LOGIN_USER);

/// get role information////////////////////////////////
const [getRole,{ data: userData } ]= useLazyQuery(GET_USER_ROLE, {
    variables: { id:userID } 
     });


 /// get role information////////////////////////////////


        const handleLogin = async () => {
          try {
            const { data } = await loginUser({
              variables: {
                identifier,
                password,
                provider,
              },
            });

            // Save JWT token to local storage or state
            const token = data.login.jwt;
            // Handle token storage as per your application requirements
         //   let user = data?.login?.user?.username;
            ID= data?.login?.user?.id ;

        //    console.log("userID", userID);
            //   console.log(user.role.name)
           
            if (token) {
              localStorage.setItem("token", token);
           //   localStorage.setItem("userID", ID);
           setUserID(ID)
            
            }
            // Save JWT token and user data to local storage or state
            // Handle token storage and user role as per your application requirements
      
             // console.log(`user is logeed in`);
            // Redirect or perform other actions based on user's role

            // Redirect or perform other actions upon successful login
          } catch (error) {
            console.error("Login failed:", error.message);
            // Handle login error
          }
     
          
        };






useEffect(()=>{
    if(userID)
    {
      // console.log(userID) 
          getRole({variables:{id:userID}})
    }
   
},[getRole, userID])
    
useEffect(()=>{
    if(userData)
    {
        console.log(userData.usersPermissionsUser.data.attributes.role.data.attributes.name)
        setIdentifier("")
        setPassword("")
    }
   
},[userData])



const role=()=>{
    if(userData)
    {
        console.log(userData.usersPermissionsUser.data.attributes.role.data.attributes.name)
        
    }
}
       /// log out function////////////////////////////////
      const handleLogOut = () => {
          
      localStorage.removeItem("token");
        //   console.log(`user logged out`);
        //   setUserID(0)
        //   setIdentifier("")
        //   setPassword("")
//         const clientx= ApolloClient.
// console.log(clientx)

      };
       /// log out function////////////////////////////////
  return (
    <div>
    <h2>Login</h2>
    <form>
      <label>
        Email or Username:
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Provider:
        <input
          type="text"
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
        />
      </label>
      <br />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <button type="button" onClick={handleLogOut}>
        logout
      </button>
      <button type="button" onClick={role}>
        role
      </button>
    </form>
  </div>
);

 
}

export default Login