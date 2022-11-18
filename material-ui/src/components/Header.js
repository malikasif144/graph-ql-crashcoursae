import {
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Badge } from "@mui/material";
import "./Header.css";
import { flexbox } from "@mui/system";
import { Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-menu">
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="blog"> Blogging Website <Link to="/modal">Modal</Link> </Typography> 
        </div>
        <Typography variant="p" component="h1">HELLO</Typography>
        <label>asif</label>
        <div className="header-icons">
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsActiveIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </div>
      <Divider />
      <InputLabel shrink htmlFor="label" className="labeel">  Label</InputLabel>
      <Typography variant="label">this is custom label</Typography>
      
    </>
  );
};

export default Header;
