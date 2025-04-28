import React, { HTMLAttributes } from "react";
import Button from "../../containers/Button/Button";
import Dropdown from "../../containers/Dropdown/Dropdown";
import useAnimation from "../../shared/hooks/useAnimation";

import "./ui/UserFirstAction.scss";

import audioIcon from "@assets/main-page/audio-visualize.svg?react";
import computerIcon from "@assets/main-page/computer.svg?react";
import importIcon from "@assets/main-page/import-icon.svg?react";
import linkIcon from "@assets/main-page/link.svg?react";
import { createClassName } from "../../shared/utils/createClassName";

type OwnProps = HTMLAttributes<HTMLDivElement> & {
  isFadeOut: boolean,
  onVoice: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const UserFirstAction: React.FC<OwnProps> = ({onVoice, isFadeOut, onAnimationEnd}) => {
  const {
    containerRef,
    isVisible,
    isFadeOut: isDropdownFadeOut,
    eventHandlers,
    handleOpen,
    handleAnimationEnd
  } = useAnimation<HTMLDivElement>({
    trigger: "hover",
    closeOnOutsideClick: true,
    initialVsibility: false
  });

  return (
    <div 
      onAnimationEnd={onAnimationEnd}
      className={createClassName(
        "begin-action-block",
        isFadeOut && "--exit"
      )}
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
            onclick={onVoice}
          />
          <div
            ref={containerRef} 
            className="button-dropdown-container"
            onAnimationEnd={handleAnimationEnd}
            {...eventHandlers}
          >
            <Button
              text="Import"
              IconLeft={importIcon}
              cssClass={`secondary-button button`}
            />
            {isVisible && 
              <Dropdown
                isOpen={!isDropdownFadeOut}
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