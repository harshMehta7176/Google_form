import React from 'react'
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu"
import {IconButton} from "@material-ui/core"
import formimage from "../images/form_icon.png"
import SearchIcon from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"
import TemporaryDrawer from './TemporaryDrawer'

function Header() {
    return (
        <div className="header">
            <div className="header_info">
                <TemporaryDrawer/>
                <img src={formimage} style={{height:'40px',width:'40px'}}alt="no image" />
            <div className="info">
                Untitled Forms
            </div>
          
            </div>
            <div className="header_search">
            <IconButton>
                <SearchIcon/>
             </IconButton>   
              <input type="text" name="search" placeholder="search"/>
            </div>
            <div className="header_right">
             <IconButton>
                 <AppsIcon />
             </IconButton>
             <IconButton>
                 <Avatar />
             </IconButton>
            </div>
        </div>
    )
}

export default Header;
