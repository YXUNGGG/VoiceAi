import React, { HTMLAttributes } from "react";
import "./Dropdown.scss";
import { createClassName } from "../../shared/utils/createClassName";

type OwnProps = HTMLAttributes<HTMLDivElement> & {
  children: any;
  isOpen?: boolean;
  cssClass?: string;
  orientation: "row" | "column";
};

const Dropdown: React.FC<OwnProps> = ({
  children,
  orientation,
  isOpen = false,
  cssClass = "",
  ...props    // change if doesn't needed
  }) => {

  return (
    <div
      style={orientation === "row" ? {display: "flex"} : {}}
      className={createClassName(
        "dropdown",
        (isOpen ? "--enter" : "--exit"),
        cssClass
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Dropdown;