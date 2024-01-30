import React from "react";
import Naviguation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNewtwork from "../components/SocialNewtwork";
import DynamicText from "../components/DynamicText";
import Buttons from "../components/Buttons";

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Naviguation />
        <SocialNewtwork />
        <div className="home-main">
          <div className="main-content">
            <h1>MS AGENCY</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </div>
    </div>
  );
};

export default Home;
