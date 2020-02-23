import React, { useRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useStateValue } from "../../context";
// import { loginSucceeded, loading, loginFail } from "../../context/actions";
// import { MAIN_PATH, IS_LOGGED_IN } from "../../configs/constants";
// import checkAuth from "../../fetch/fetchAuth";
import Loader from "../Loader";
/* eslint-disable */
const Login = ({ history }) => {
  // eslint-disable-next-line
  const [{ isLoggedIn }, dispatchAuth] = useStateValue();
  const [{ isLoading }, dispatchLoading] = useStateValue();

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [requestError, setRequestError] = useState("");

  const emailEl = useRef(null);
  const passwordEl = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    // const emailVal = emailEl.current.value;
    // const passwordVal = passwordEl.current.value;

    // dispatchLoading(loading(true));
    // const auth = await checkAuth(emailVal, passwordVal);
    // if (auth) {
    //   dispatchAuth(loginSucceeded());
    //   history.push(MAIN_PATH);
    //   localStorage.setItem(IS_LOGGED_IN, "true");
    // } else {
    //   dispatchAuth(loginFail());
    //   setRequestError("Wrong login or password");
    //   setErrorPassword("");
    //   setErrorEmail("");
    //   passwordEl.current.style.borderColor = "#1a237e";
    //   emailEl.current.style.borderColor = "#1a237e";
    // }

    // dispatchLoading(loading(false));
  }

  const handleEmailValidation = (e) => {
    e.preventDefault();
    // emailEl.current.style.borderColor = "red";
    // passwordEl.current.style.borderColor = "#1a237e";
    // emailEl.current.value
    //   ? setErrorEmail("Invalid login")
    //   : setErrorEmail("Email required");
    // setErrorPassword("");
    // setRequestError("");
  };

  const handlePasswordValidation = (e) => {
    e.preventDefault();
    // emailEl.current.style.borderColor = "#1a237e";
    // passwordEl.current.style.borderColor = "red";
    // passwordEl.current.value
    //   ? setErrorPassword("Invalid password")
    //   : setErrorPassword("password required");
    // setErrorEmail("");
    // setRequestError("");
  };

  if (isLoading) return <Loader />;

  return (
    <div className="login">
      <div className="login-header">Login to your account</div>
      <div className="login-main">
        <form onSubmit={handleSubmit}>
          <div className="login-main-email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              ref={emailEl}
              defaultValue={"test@mail.ru"}
              onInvalid={handleEmailValidation}
            />
            <label className="login-main-error">{errorEmail}</label>
          </div>
          <div className="login-main-password">
            <label htmlFor="password">Password</label>
            <input
              defaultValue={"TestPassword123_"}
              type="password"
              placeholder="Enter Password"
              name="password"
              required
              ref={passwordEl}
              onInvalid={handlePasswordValidation}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
              autoComplete={""}
            />
            <label className="login-main-error">{errorPassword}</label>
          </div>
          <button type="submit">
            {" "}
            Login <FaLongArrowAltRight />
          </button>
        </form>
        <p>{requestError}</p>
      </div>
    </div>
  );
};

export default Login;
