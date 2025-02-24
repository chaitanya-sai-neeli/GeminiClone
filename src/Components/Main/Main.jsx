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
      </div>
    </div>
  );
};

export default Main;
