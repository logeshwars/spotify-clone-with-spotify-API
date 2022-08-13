import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./Datalayer";

function Sidebar() {
  const [{ playlist, user }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryIcon} title="Your Library" />
      <br />
      <strong className="sidebar_title">Playlist</strong>
      <hr />
      {playlist?.items?.map((playlists) => (
        <SidebarOption title={playlists.name} />
      ))}
    </div>
  );
}

export default Sidebar;
