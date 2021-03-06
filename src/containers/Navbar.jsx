import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import ProjectIcon from '@material-ui/icons/Filter1';
import Project2Icon from '@material-ui/icons/Filter2';

import styled from "styled-components";

import Menu from "../assets/images/menu_icon.jpg"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const StyledNavbar = styled.div`
    display: flex;
    align-items: right;
    justify-content: right;
    float: right;
    padding-top:40px;
    background-color : None;
    opacity : 0.5;
`

const StyledDoor = styled.span`
    display: flex;
    height: 120px;
    margin:0 40px 0 0;
    width: 70px;
    float: right;
`

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['ChamberProject', 'Starred'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <ProjectIcon /> : <Project2Icon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['mail'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <MailIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <StyledNavbar style = {{backgroundColor:"black"}}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onMouseEnter={toggleDrawer(anchor, true)}>
            <StyledDoor>
              <img style = {{width : "100%", height : "100%"}}src={Menu} alt="menu"/>
            </StyledDoor>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </StyledNavbar>
  );
}
