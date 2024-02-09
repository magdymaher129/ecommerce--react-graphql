import { Button, Form } from "react-bootstrap";
import Input from "./Input";
import Submit from "./Submit";
import Message from "./Message";
import React from "react";
import style from "../style/auth.module.css";

import useValidate from "../hook/useValidate";

import useAuth from "../hook/useAuth";
import { Link } from "react-router-dom";

function Auth() {
  return <div className={style.main}></div>;
}

export default React.memo(Auth);

// eslint-disable-next-line react/prop-types
export const AuthForm = ({ label }) => {
  const {
    msg,
    submitHandler,
    changeHandler,
    start,
    handleLogOut,
    move,
    isAuthenticated,
   // roles
  } = useValidate();

  return (
    <div className={style.authDev}>
      {!isAuthenticated ? (
        <div>
          <Message msg={msg} start={start} />
          <h2 className='text-center'>{label}</h2>
          <div>
            <Input changeHandler={changeHandler} type='text' name='userName' />
            <Input
              changeHandler={changeHandler}
              type='password'
              name='password'
            />

            <Submit
              submitHandler={submitHandler}
              auth={isAuthenticated}
              handleLogOut={handleLogOut}
            />
           <div className="py-4">
            <Link to='/signup' style={{ textDecoration: "none",color:"grey" }}>
              If you hav not account click here to  create  an account{" "}
            </Link></div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className='text-center'>
            {" "}
            Welcome :
            <span
              style={{
                color: "green",
                textTransform: "capitalize",
                margin: "0 30px",
              }}
            >
              {localStorage.getItem("userName")}
            </span>{" "}
          </h2>
          <hr />
          <div
            style={{
              fontWeight: "bold",
              marginTop: "10px",
              display: "flex",
              width: "100%",
              gap: "20px",
            }}
          >
            <Button
              variant='danger'
              type='submit'
              size='lg'
              onClick={handleLogOut}
            >
              <span style={{ fontWeight: "bold" }}>LogOut</span>
            </Button>

            <Button
              variant='warning'
              type='submit'
              size='lg'
              onClick={move}
              style={{ flexGrow: "2" }}
            >
            {localStorage.getItem("role")==3?  <span style={{ fontWeight: "600" }}>navigate  to panel </span>
          :<span style={{ fontWeight: "600" }}>navigate  to shopping cart </span>
}
          
          </Button>
          </div>
        </div>
      )}
    </div>
  );
};
