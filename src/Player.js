import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Bodypart from "./Body";
import Footer from "./Footer";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Bodypart spotify={spotify} />
        <Footer />
      </div>
    </div>
  );
}

export default Player;
