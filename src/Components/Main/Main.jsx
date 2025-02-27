import { assets } from "../../assets/assets";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Dev</span>
          </p>
          <p>How can I help you today ?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest some trekking spots in Telangana</p>
            <img src={assets.compass_icon} alt="compass pic" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: Urban Planning</p>
            <img src={assets.bulb_icon} alt="compass pic" />
          </div>
          <div className="card">
            <p>Brain storm team bonding activities for our work retreat</p>
            <img src={assets.message_icon} alt="compass pic" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="compass pic" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
