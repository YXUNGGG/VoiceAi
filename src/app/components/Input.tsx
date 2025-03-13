import React from "react";

import "../styles/Button.scss";
import { createClassName } from "../utils/createClassName";

type OwnProps = {
  content: string;
  cssClass?: string;
  isDisabled?: boolean;
}

const Button: React.FC<OwnProps> = ({ content, cssClass = "", isDisabled = false}) => {
  return (
    <input 
      className={createClassName(isDisabled && "disabled", cssClass !== "" && cssClass)}
      disabled={isDisabled}
    />
  );
}

export default Button;