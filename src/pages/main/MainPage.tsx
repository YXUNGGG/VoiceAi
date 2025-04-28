import React, { useEffect, useRef, useState } from "react";

// import "./ui/MainPage.scss";

import Sidebar from "./Sidebar";
import UserComposer from "./containers/UserComposer";
import useAnimation from "../../shared/hooks/useAnimation";
import UserFirstAction from "./UserFirstAction";

const MainPage = () => {
  const {
    handleAnimationEnd,
    handleOpen: handleBlockClose,
    isVisible,
    isFadeOut: isFadeOutBlock
  } = useAnimation({trigger: "click", initialVsibility: true});

  const messageRef = useRef<HTMLDivElement>(null);
  const lettersCountRef = useRef(0);
  const messageHeightRef = useRef(0);
  const [words, setWords] = useState<string[]>([]);

  const text = `Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis potenti
  morbi pellentesque sodales suscipit ultricies. Tellus hac primis
  vestibulum aliquet platea convallis gravida, quam suspendisse.
  Praesent consequat.`;

  useEffect(() => {
    text.split(" ").map((word, i) => {
      if (messageRef.current) messageHeightRef.current = messageRef.current.offsetHeight;
      setTimeout(() => {
        const wordLength = word.length + 1;
      
        if ((wordLength + lettersCountRef.current) >= 105) {
          if (messageRef.current) {
            messageHeightRef.current = messageHeightRef.current + 20;
          }
          lettersCountRef.current = 0;
        }

        lettersCountRef.current += wordLength;
        setWords(prev => [...prev, word]);

        // if (messageRef.current) {
        //   const newHeight = messageRef.current.offsetHeight;
        //   if (newHeight > messageHeightRef.current) messageHeightRef.current = newHeight;
        // }
      }, 150 * i)
    })
  }, [])

  return (
    <div className="wrapper">
      <Sidebar />

      <div className="chat-wrapper">
        <div className="chat-background">
          <div className="chat">
            <div 
            className="conspect-message-block" 
            ref={messageRef}
            style={{height: `${messageHeightRef.current}px`}}
            >
              {words.map((word, i) => {
                return <span
                  key={i}
                  style={{animation: `fade-word 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0)`}}
                >{word}</span>
              })}
            </div>

            { isVisible &&
            <UserFirstAction
              onVoice={handleBlockClose}
              onAnimationEnd={handleAnimationEnd}
              isFadeOut={isFadeOutBlock}
            />}

            {(isFadeOutBlock || !isVisible) && <UserComposer />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
export const sum = (a: number, b: number) => a + b;