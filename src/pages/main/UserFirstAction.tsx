import React from "react";
import Button from "../../containers/Button/Button";
import Dropdown from "../../containers/Dropdown/Dropdown";
import useAnimation from "../../shared/hooks/useAnimation";

import "./ui/UserFirstAction.scss";

import audioIcon from "@assets/main-page/audio-visualize.svg?react";
import computerIcon from "@assets/main-page/computer.svg?react";
import importIcon from "@assets/main-page/import-icon.svg?react";
import linkIcon from "@assets/main-page/link.svg?react";
import { createClassName } from "../../shared/utils/createClassName";

const UserFirstAction = () => {
  const {
    containerRef,
    isVisible,
    isFadeOut,
    eventHandlers,
    handleOpen,
    handleAnimationEnd
  } = useAnimation<HTMLDivElement>({
    trigger: "hover",
    closeOnOutsideClick: true,
    initialVsibility: false
  });

  const {
    handleAnimationEnd: handleBlockAnimationEnd,
    handleOpen: handleBlockClose,
    isVisible: isBlockVisible,
    isFadeOut: isFadeOutBlock
  } = useAnimation({trigger: "click", initialVsibility: true});

  if (!isBlockVisible) return;

  return (
    <div className={createClassName(
        "begin-action-block",
        isFadeOutBlock && "--exit"
      )} 
      onAnimationEnd={handleBlockAnimationEnd}
    >
      <div className="title">Welcome to the che<span>rr</span>y</div>
      <div className="action-container">
        <div className="message-block">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis potenti
          morbi pellentesque sodales suscipit ultricies. Tellus hac primis
          vestibulum aliquet platea convallis gravida, quam suspendisse.
          Praesent consequat.
        </div>
        <div className="actions">
          <Button
            text="Voice"
            IconLeft={audioIcon}
            cssClass="button"
            onclick={handleBlockClose}
          />
          <div
            ref={containerRef} 
            className="button-dropdown-container"
            onAnimationEnd={handleAnimationEnd}
            {...eventHandlers}
          >
            <Button
              text="Input"
              IconLeft={importIcon}
              cssClass={`secondary-button button`}
            />
            {isVisible && 
              <Dropdown
                isOpen={!isFadeOut}
                orientation="column"
              >
                <Button 
                  text="Paste from clipboard"
                  cssClass="dropdown-button"
                  IconLeft={linkIcon}
                  onclick={() => handleOpen}
                />
                <Button
                  text="Text file on computer"
                  cssClass="dropdown-button"
                  IconLeft={computerIcon}
                  onclick={() => handleOpen}
                />
              </Dropdown>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserFirstAction;