/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "./../../assets/assets";

function SideBar() {
  const [openDrawer, setopenDrawer] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={() => setopenDrawer(!openDrawer)} className="menu" src={assets.menu_icon} />
        <div className="newchat">
          <img src={assets.plus_icon} />
          {openDrawer ? <p>New Chat</p> : null}
        </div>
        {openDrawer ? (
          <div className="recent">
            <p className="recenttitle">Recent</p>
            <div className="recententry">
              <img src={assets.message_icon} />
              <p>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom ">
        <div className="bottom-item recententry">
          <img src={assets.question_icon} />
          {
            openDrawer ?           <p>Help</p> : null

          }
        </div>
        <div className="bottom-item recententry">
          <img src={assets.history_icon} />
          {
            openDrawer ?          <p>Activity</p>
: null
          }
        </div>
        <div className="bottom-item recententry">
          <img src={assets.setting_icon} />
          {
            openDrawer ?           <p>Settings</p>
: null
          }
        </div>
      </div>
    </div>
  );
}

export default SideBar;
