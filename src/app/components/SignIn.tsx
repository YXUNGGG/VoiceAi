import React from "react";
import Button from "./Button";

const SignIn = () => {
  return (
    <>
      <label>
        <div className="label">Email</div>
        <input 
          type="text" 
          placeholder="Type here.."
          autoComplete="off"
        />
      </label>

      <label>
        <div className="label">Password</div>
        <input type="password" placeholder="Your password.." />
        <div className="reset-pass">Forgot password?</div>
      </label>

      <Button text="Log in" />

      <div className="ads-container">
        <div className="ad-block">
          <div className="header" style={{color: "#B0B0B0"}}>
            Primary
          </div>

          <div className="line" />

          <div className="content">
            <div className="option disabled">
              <div className="dot" />
              Limited usage
            </div>

            <div className="option disabled">
              <div className="dot" />
              Half functionality
            </div>
          </div>
        </div>

        <div className="ad-block">
        <div className="header">
            V.I.P
          </div>

          <div className="line" />

          <div className="content">
            <div className="option">
              <div className="dot" />
              Unlimited usage
            </div>

            <div className="option">
              <div className="dot" />
              Full functionality
            </div>
          </div>
        </div>
        <div className="ad-block">
        <div className="header" style={{color: "#C5073D"}}>
            Premium
          </div>

          <div className="line" />

          <div className="content">
            <div className="option">
              <div className="dot" />
              Saved history
            </div>

            <div className="option">
              <div className="dot" />
              All new features
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;