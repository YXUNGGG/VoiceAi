import React from "react";

import "../styles/Authorize.scss"
import bg from "../assets/authorize/bg.svg";
import Button from "./Button";

const Authorize = () => {
  return (
    <div className="form-container" style={{backgroundImage: `url(${bg}`}}>
      <form className="Auth-window">
      <h3 className="title">
        Sign <span className="text-red">in</span>
      </h3>

        <label>
          <div className="label">Email</div>
          <input type="text" placeholder="Type here.."/>
        </label>

        <label>
          <div className="label">Password</div>
          <input type="text" placeholder="Your password.."/>
          <div className="reset-pass">Forgot password?</div>
        </label>

        <Button text="Log in" />

        <div className="ads-container">
          <div className="ad-block"></div>
          <div className="ad-block"></div>
          <div className="ad-block"></div>
        </div>
      </form>
    </div>
  );
}

export default Authorize;