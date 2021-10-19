import React,{useState} from 'react'
import MenuIcon from "@material-ui/icons/Menu"
import {IconButton} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

const TemporaryDrawer = () => {
    const [state,setState]=React.useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (event) =>{
        setState({...state,[anchor] : open});
    }
    return (
        <div>
          <React.Fragment>
            <IconButton onClick={toggleDrawer("left",true)}>
                  <MenuIcon />
            </IconButton>  
            <Drawer open={state['left']} onClose={toggleDrawer("left",false)} anchor={'left'}>  
               <List>
                   <ListItem>
                       Sidebar
                   </ListItem>
               </List>
            </Drawer>
          </React.Fragment>
        </div>
    )
}

export default TemporaryDrawer
