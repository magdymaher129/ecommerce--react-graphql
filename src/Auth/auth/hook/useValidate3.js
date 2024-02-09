import React, { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../gql/login";
import { GET_ROLE } from "../gql/getRole";
import useAuth from "./useAuth";

function useValidate() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState("");
  const [item, setItem] = useState({ userName: "", password: "" }); // Initial values
  const [getRole, { data: role }] = useLazyQuery(GET_ROLE);
  const {setLogin,setLogOut}=useAuth()
  const [login, { data }] = useMutation(LOGIN_MUTATION, {

    variables: { identifier:item.userName, password :item.password} ,
    onCompleted: async () => {
      try {
      await getRole({
          variables: { id: data.login.user.id }
          
      })
       
      } catch (error) {
        setError("Failed to fetch role");
      }
    },
    onError: (error) => {
      setError(`Login failed ${error}`); // Improved error message
    },
  });

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.login.jwt);
     
    }
  }, [data]);
  useEffect(() => {
    if (role) {
     console.log(role)
      // localStorage.setItem(
      //   "role",
      //  role?.usersPermissionsUser.data?.attributes.role.data.id,
      // )
    }
  }, [role]);
  useEffect(() => {
    if (error) {
      // Handle errors appropriately, e.g., display error messages
      // or clear them after a timeout
      setMsg("error: some thing is not correct")
    }
  }, [error]); // Add error to dependency array

  useEffect(() => {
    if (item.userName && item.password) {
      setMsg("");
    } else {
      setMsg("Username or password field is empty");
    }
  }, [item]); // Remove start from dependency array

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null); // Clear previous errors
    try {
      await login({ variables: { identifier: item.userName, password: item.password },onCompleted: setLogin()});
    } catch (error) {
      setError("Login failed"); // Simplified error handling
    } finally {
      setIsLoading(false);
    }
  };

  const changeHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return {
    isLoading,
    error,
    msg,
    submitHandler,
    changeHandler,
  };
}

export default useValidate;