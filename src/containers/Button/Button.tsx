import React from "react";
import "./Button.scss";
import "../Dropdown/Dropdown.scss";
import { createClassName } from "../../shared/utils/createClassName";

type OwnProps = {
  text: string;
  cssClass?: string;
  isFilled?: boolean;
  isDisabled?: boolean;
  onclick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  IconLeft?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  IconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Button: React.FC<OwnProps> = ({ 
  text,
  cssClass = "", 
  isFilled = true, 
  isDisabled = false, 
  onclick,
  IconLeft, 
  IconRight 

}) => {
  return (
    <button 
    onClick={onclick}
      className={createClassName(
        !isFilled && "transparent", 
        isDisabled && "disabled", 
        cssClass !== "" && cssClass
      )}
      disabled={isDisabled}
    >
      {IconLeft && <IconLeft style={{marginRight: "6px"}}/>}
      {text}
      {IconRight && <IconRight style={{marginRight: "6px"}}/>}
    </button>
  );
};

export default Button;