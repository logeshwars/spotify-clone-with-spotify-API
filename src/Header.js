import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./Datalayer";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  console.log(user, "user");
  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input type="text" placeholder="Search for Artist,Songs" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
