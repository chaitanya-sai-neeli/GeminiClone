import React, { useContext, useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, setRecentPrompt, prevPrompts, newChat } = useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div
                  className="recent-entry"
                  onClick={() => loadPrompt(item)}
                  key={index}
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

/*Hi Bhakti, I need a small clarification on answering the point 1 - I do not have dual employment history or overlap in work experience between two organizations (Agree/Disgree):
As we were discussing yesterday I had an unintended employment overlap of 19 days with my 1st organization Accenture(as a fresher) and Temenos (2nd employer).
So now can you please suggest me on how to answer the point 1 ? Should I go-ahead and agree for unintended employment overlap or should I only partially agree as it has happened without my control to change it.

Additionally I am including my explaination for the unintentional overlap below-
I sincerely apologize for any confusion regarding the overlap in my employment history. This situation was entirely unintentional. When I secured a better opportunity as a fresher ie; temenos mentioned everything beforehand regarding my role in the team and project which wasn't the case with Accenture, I initially requested an immediate release from Accenture. At first, I was informed that no notice period would be required since I was not allocated to any project and was in a stream awaiting batch. However, I was later informed that I had to serve a one-month notice period after accepting the offer from Temenos.

Despite my best efforts to secure an early release from Accenture and extend my joining date at Temenos, neither was possible, which led to an unintended 19-day overlap in my employment history.

At the time, as fresh graduates, we were unfamiliar with corporate policies and their implications. Dual employment was never my intention; it occurred unknowingly, and I had no means to prevent it.

Nevertheless, I completed all exit formalities at Accenture and have obtained both my resignation acceptance and relieving letter as proof of proper separation. Additionally, I returned the joining bonus of ₹25,000, as I had resigned within a month.

I sincerely request you and your team to consider my explanation and not reject my candidature due to this unintentional situation. I truly value this opportunity and appreciate your understanding.

Looking forward to your positive consideration.
*/
