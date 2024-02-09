import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../gql/login";
import { GET_ROLE } from "../gql/getRole";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { SIGNUP__MUTATION } from "../gql/createUser";

function useSignUp() {
  const [start, setStart] = useState("");
  const [msg, setMsg] = useState("");
  const [item, setItem] = useState({ userName: "", password: "", email: "" });


  const [SignUp, { error: signupError, data: sigupData }] = useMutation(
    SIGNUP__MUTATION,
    {
      onCompleted: console.log("complete successfully sign up"),
      onError: console.error("signup error"),
    },
  );

  const navigate = useNavigate();

  

  useEffect(() => {
    if (item.userName && item.password && item.email) setMsg("");
    if (!item.userName || !item.password ||!item.email) {
      setMsg("userName  or passward or email  field is empty");
    }
  }, [item]);





  //// register //////////////////////////
  const handleSignUp = async (username, password, email) => {
    try {
      await SignUp({ variables: { username, password, email } });
     
    } catch (error) {
      setMsg("Login failed", error.message);
    }
  };
  function changeHandler(e) {
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  const registerHandler = (e) => {
    setStart("start");
    e.preventDefault();

    if (item.userName && item.password && item.email) {
      handleSignUp(item?.userName, item?.password, item?.email);
    navigate("/login")
    }
  };

  return {
    msg,
 
    changeHandler,
    start,


    
    registerHandler,
  };
}

export default useSignUp;
