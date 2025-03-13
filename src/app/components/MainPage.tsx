import React, { useEffect, useRef } from "react";

import "../styles/MainPage.scss";

import logo from "../assets/welcome-page/logo.svg";
import plusIcon from "../assets/main-page/plus.svg";
import priceIcon from "../assets/main-page/price-plan.svg";
import settingsIcon from "../assets/main-page/settings.svg";
import avatarIcon from "../assets/main-page/avatar.svg";
import importIcon from "../assets/main-page/import-audio.svg";
import audioIcon from "../assets/main-page/audio-visualizer.svg";
import Button from "./Button";
import ConspectHistoryElement from "./ConspectHistoryElement";

const MainPage = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;

      const handleInput = function(this: HTMLTextAreaElement) {
        console.log("hoho");
        this.style.height = 'auto';
        this.style.height = `${this.scrollHeight}px`;
      };

      textarea.addEventListener('input', handleInput);

      // Очистка при размонтировании
      return () => {
        textarea.removeEventListener('input', handleInput);
      };
    }
  }, []);

  return (
    <div className="wrapper">
      <div className="sidebar">
        <img src={logo} alt="logo" className="auth-logo" />
        <Button 
          cssClass="new-conspect-button"
          text="New conspect"
          iconLeft={plusIcon}
        />

        <div className="line"></div>

        <div className="content">
          <div className="history">
            <ConspectHistoryElement date={Date.now() - 300000 * 5} topics={["Friday math lecture"]}/>

            <ConspectHistoryElement date={Date.now() - 30000000 * 5} topics={["Thursday lecture", "History Rome conspect"]}/>
          </div>

          <div className="user-block">
            <div className="upgrade-price-plan">
              <div>
                <img src={priceIcon} alt="icon" />
                Upgrade plan
              </div>

              <div className="plan-level">Free</div>
            </div>

            <div className="profile">
              <div>
                <img src={avatarIcon} className="avatar" alt="icon" />
                My profile
              </div>

              <img src={settingsIcon} alt="icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="chat-wrapper">
        <div className="chat">
          <div className="main-prompt-input">
            <textarea ref={textareaRef} placeholder="Type something for config a conspect..."></textarea>

            <div className="input-tools">
              <div className="conspect-config">
                <Button cssClass="config" text={"Short"} isFilled={false} />
                <Button cssClass="config" text={"Without changes"} isFilled={false} />
                <Button cssClass="config" text={"Expanded"} isFilled={false} />
              </div>

              <div className="actions">
                <img src={importIcon} alt="icon" />

                <Button 
                  iconLeft={audioIcon}
                  text="Voice"
                  cssClass="record-button"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;