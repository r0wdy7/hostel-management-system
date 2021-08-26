import useInput from "../../../src/hooks/use-input";
import Input from "../UI/Input";

import "./LoginForm.css";

const LoginForm = () => {
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    // reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  console.log(enteredEmail);
  console.log(emailInputHasError);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    // reset: resetPasswordInput,
  } = useInput((value) => value.length >= 8);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) formIsValid = true;

  const inputClass = "login-form-input";
  const invalidClass = "invalid";

  const emailInputClass = emailInputHasError
    ? `${inputClass} ${invalidClass}`
    : inputClass;
  const passwordInputClass = passwordInputHasError
    ? `${inputClass} ${invalidClass}`
    : inputClass;

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      console.log("sorry");
      return;
    } else {
      console.log("You are logged in");
      return;
    }
  };

  return (
    <form className="login-form" onSubmit={formSubmissionHandler}>
      <Input
        className={emailInputClass}
        label="E-mail address"
        // error={emailInputHasError && <p>Email is not valid</p>}
        value={enteredEmail}
        inputAttributes={{ id: "email", type: "email" }}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
      />
      <Input
        className={passwordInputClass}
        label="Password"
        // error={passwordInputHasError && "Password atleast have 8 characters"}
        value={enteredPassword}
        inputAttributes={{ id: "password", type: "password" }}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
      />
      <button>Sign In</button>
      <div className="login-helper">
        <a href="#">Forgot Password</a>
        <a href="">Need Help?</a>
      </div>
    </form>
  );
};

export default LoginForm;
