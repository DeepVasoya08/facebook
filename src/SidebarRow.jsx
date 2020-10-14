import React from "react";
import { Avatar } from "@material-ui/core"
import "./SidebarRow.css";

// to destructure props use {}
function SidebarRow({src, Icon, title}) {
  return (
    <div className="sidebarRow">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
