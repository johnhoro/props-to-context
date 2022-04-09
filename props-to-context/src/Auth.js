import React from "react";
import { useContext } from "react";
import ModeContext from "./ModeContext";

function Auth() {
  let mode = useContext(ModeContext);
  let loginHandler = mode.loginHandler;
  let handleModal = mode.handleModal;
  let handleInput = mode.handleInput;
  let email = mode.data.email;
  let password = mode.data.password;

  return (
    <div className="auth">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler(email, password);
          handleModal(false);
        }}
      >
        <h3 className="center">Admin Login</h3>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInput}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter the password"
          value={password}
          onChange={handleInput}
        />
        <button className="auth-btn">Login</button>
        <div className="auth-cancel" onClick={() => handleModal(false)}>
          <i className="fal fa-times"></i>
        </div>
        <p className="password-hint">
          Please use admin@admin.com as email and qwerty as password to login.
        </p>
      </form>
    </div>
  );
}

export default Auth;
