import React, { useRef, useState } from "react";
import classes from "../Style/Utils.module.css";
import { useDispatch } from "react-redux";
import {
  registerUser,
  sendLoginRequest,
  setIsLoading,
} from "../../actions/auth";

function Login(props) {
  const passwordRef = useRef();
  const emailRef = useRef();
  const confirmPasswordRef = useRef();
  const dispatch = useDispatch();
  const [register, setRegister] = useState(false);
  const handleSubmit = () => {
    dispatch(setIsLoading(true));
    dispatch(
      sendLoginRequest(emailRef.current.value, passwordRef.current.value)
    );
  };
  const handleRegister = () => {
    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      const data = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      dispatch(registerUser(data));
      dispatch(setIsLoading(true));
    }
  };
  return (
    <div
      className={`${classes.Login} animate__animated animate__rotateInUpLeft animate__delay-1s `}
    >
      {register ? (
        <>
          <h1>Sign Up</h1>
          <h4>Get yourself registered</h4>
          <form>
            <input
              type="email"
              placeholder="Email"
              ref={emailRef}
              className={classes.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              ref={passwordRef}
              className={classes.input}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
            <input
              type="password"
              placeholder="Confirm password"
              className={classes.input}
              ref={confirmPasswordRef}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
          </form>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <h4>Enter your credentials</h4>
          <input
            type="email"
            placeholder="Email"
            className={classes.input}
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Password"
            className={classes.input}
            ref={passwordRef}
          />
        </>
      )}
      <button
        className={classes.btn}
        onClick={register ? handleRegister : handleSubmit}
      >
        {register ? "Sign up" : "Login"}
      </button>
      <button
        className={classes.btn1}
        onClick={() => {
          document.documentElement.scrollTop = 0;
          setRegister((prev) => {
            return !prev;
          });
        }}
      >
        {register ? "Login" : "Sign up"}
      </button>
    </div>
  );
}

export default Login;
