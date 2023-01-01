import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../contexts/auth-context";
import Input from "../UI/FormInput/Input";

const emailReducer = (prevState, action) => {
  if (action.USER_EMAIL) {
    return {
      isValid: action.USER_EMAIL.includes("@"),
      value: action.USER_EMAIL,
    };
  }
  return {
    isValid: prevState.value.includes("@"),
    value: prevState.value,
  };
};

const passwordReducer = (prevState, action) => {
  if (action.USER_PASSWORD) {
    return {
      isValid: action.USER_PASSWORD.trim().length > 6,
      value: action.USER_PASSWORD,
    };
  }

  return {
    isValid: prevState.value.trim().length > 6,
    value: prevState.value,
  };
};

const Login = () => {
  const authCtx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    isValid: "",
    value: "",
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    isValid: "",
    value: "",
  });

  const { isValid: isValidEmail, value: enteredEmail } = emailState;

  const { isValid: isValidPassword, value: enteredPassword } = passwordState;

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log("validating form");
    setFormIsValid(isValidEmail && isValidPassword);
  }, [isValidEmail, isValidPassword]);

  const emailChangeHandler = (event) => {
    event.preventDefault();
    dispatchEmail({ USER_EMAIL: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    event.preventDefault();
    dispatchPassword({ USER_PASSWORD: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ INPUT_BLUR: "" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ INPUT_BLUR: "" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={isValidEmail}
          type="email"
          id="email"
          label="E-Mail"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></Input>
        <Input
          isValid={isValidPassword}
          type="password"
          label="Password"
          id="password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        ></Input>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
