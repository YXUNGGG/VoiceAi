import React, { useRef } from "react";

import "./ui/MainPage.scss";

import Sidebar from "./Sidebar";
import UserComposer from "./containers/UserComposer";
import useAnimation from "../../shared/hooks/useAnimation";
import UserFirstAction from "./UserFirstAction";

const MainPage = () => {
  const UserFirstActionRef = useRef<HTMLDivElement>(null);

  const startRecording = () => {
    UserFirstActionRef.current?.classList.add("disabled");
  }

  return (
    <div className="wrapper">
      <Sidebar />

      <div className="chat-wrapper">
        <div className="chat">
          <UserFirstAction />
          {/* <UserComposer /> */}
        </div>
      </div>
    </div>
  );
}

export default MainPage;