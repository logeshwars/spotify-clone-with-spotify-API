import React from "react";
import "./Footer.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="album_image"
          src="https://media.pitchfork.com/photos/5f3ff9dcf6eb11025fede860/1:1/w_320/everythng%20means%20nothing_blackbear.jpg"
          alt=""
        />
        <div className="songinfo">
          <h4>Hot girl Bummer</h4>
          <p>Black Bear</p>
        </div>
      </div>
      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleFilledIcon className="footer_icon" fontSize="large" />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container space={3}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider className="MuiSlider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
