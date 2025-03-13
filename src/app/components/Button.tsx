import React from "react";

import "../styles/Button.scss";
import { createClassName } from "../utils/createClassName";

type OwnProps = {
  text: string;
  cssClass?: string;
  isFilled?: boolean;
  isDisabled?: boolean;
  iconRight?: string;
  iconLeft?: string;
}

const Button: React.FC<OwnProps> = ({ text, cssClass = "", isFilled = true, isDisabled = false, iconLeft, iconRight}) => {
  return (
    <button 
      className={createClassName(!isFilled && "transparent", isDisabled && "disabled", cssClass !== "" && cssClass)}
      disabled={isDisabled}
    >
      {iconLeft && <img src={iconLeft} alt="icon" />}
      {text}
      {iconRight && <img src={iconRight} alt="icon" />}
    </button>
  );
}

export default Button;