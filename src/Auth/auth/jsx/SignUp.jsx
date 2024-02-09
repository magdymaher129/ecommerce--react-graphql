import React from "react";
import Message from "./Message";
import Input from "./Input";
import style from "../style/auth.module.css";

import Submit from "./Submit";
import useSignUp from "../hook/useSignUp";
import { Link } from "react-router-dom";
function SignUp() {
  const { msg, changeHandler, start, registerHandler } = useSignUp();
  return (
    <div className='d-flex justify-content-center py-4'>
      <div className={style.authDev}>
        <div>
          <Message msg={msg} start={start} />
          <h2 className='text-center'>Sign Up</h2>
          <div>
            <Input changeHandler={changeHandler} type='text' name='userName' />
            <Input
              changeHandler={changeHandler}
              type='password'
              name='password'
            />
            <Input changeHandler={changeHandler} type='email' name='email' />

            <Submit submitHandler={registerHandler} />

            <div className='py-4'>
              <Link
                to='/login'
                style={{ textDecoration: "none", color: "grey" }}
              >
                If you hav an account click here to login{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
