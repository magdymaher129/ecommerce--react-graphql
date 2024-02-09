import { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../gql/login";
import { GET_ROLE } from "../gql/getRole";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { SIGNUP__MUTATION } from "../gql/createUser";

function useValidate() {
  const [start, setStart] = useState("");
  const [msg, setMsg] = useState("");
  const [item, setItem] = useState({ userName: "", password: "", email: "" });
  const {
    setLogin,
    setLogout,
    isAuthenticated,
    setAdmin,
    setUser,
    setRoles,
    roles,
  } = useAuth();
  const [login, { data, error }] = useMutation(LOGIN_MUTATION);

  const [getRole, { data: role }] = useLazyQuery(GET_ROLE);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data.login.jwt);
      localStorage.setItem("userName", data.login.user.username);
      setLogin();
    }
    if (role) {
      localStorage.setItem(
        "role",
        role?.usersPermissionsUser.data?.attributes.role.data.id,
      );
      if (error) {
        setMsg("error", error.message);
      }
      if (!role) {
        setLogout();
      }
      if (role?.usersPermissionsUser.data?.attributes.role.data.id) {
        setRoles(role?.usersPermissionsUser.data?.attributes.role.data.id);
      }
    }
  }, [
    role,
    data,
    error,
    setLogin,
    setLogout,
    setAdmin,
    setUser,
    setRoles,
    roles,
  ]);

  useEffect(() => {
    if (item.userName && item.password) setMsg("");
    if (!item.userName || !item.password) {
      setMsg("userName  or passward field is empty");
    }
  }, [item, start]);

  useEffect(() => {
    if (localStorage.getItem("role")) {
      setLogin();
      let user = localStorage.getItem("role");
      setRoles(user);
    }
  }, [setLogin, setLogout, setRoles]);

  // useEffect(()=>{
  //   if (localStorage.getItem('role') === 3) {
  //     setAdmin()

  //   }
  //   else if (localStorage.getItem('role') !== 3) {
  //     setUser()

  //   }
  // },[setAdmin, setUser])
  function move() {
    if (localStorage.getItem("role") == 3) {
      navigate("/panel");
    } else if (localStorage.getItem("role") !== 3) {
      navigate("/shoppingcart");
    } else {
      navigate("/");
    }
  }

  /// login //////////////////////////////////

  const handleLogin = async (identifier, password) => {
    try {
      const response = await login({ variables: { identifier, password } });
      if (response.data?.login.user.id) {
        await getRole({ variables: { id: response.data?.login.user.id } });
      }
    } catch (error) {
      setMsg("Login failed", error.message);
    }
  };
  /// login //////////////////////////////////

  function changeHandler(e) {
    setItem({ ...item, [e.target.name]: e.target.value });
  }
  const submitHandler = (e) => {
    setStart("start");
    e.preventDefault();
    // if (!item.userName || !item.password) {
    //   setMsg("userName  or passward field is empty");
    // }
    if (item.userName && item.password) {
      handleLogin(item?.userName, item?.password);
    }
  };

  const handleLogOut = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
    localStorage.setItem("userName", "");
    //  setRoles(null);
      setLogout();
      navigate("/");
  };

  return {
    msg,
    submitHandler,
    changeHandler,
    start,
    handleLogOut,
    move,
    isAuthenticated,
    // roles,
  };
}

export default useValidate;
