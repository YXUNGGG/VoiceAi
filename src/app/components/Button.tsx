import React from "react";

import "../styles/Button.scss";
import { createClassName } from "../utils/createClassName";

type OwnProps = {
  text: string;
  isFilled?: boolean;
  isDisabled?: boolean;
}

const Button: React.FC<OwnProps> = ({ text, isFilled = true, isDisabled = false}) => {
  return (
    <button 
      className={createClassName(!isFilled && "transparent", isDisabled && "disabled")}
      disabled={isDisabled}
    >{text}</button>
  );
}

export default Button;