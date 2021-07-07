import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import clsx from "clsx";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { useStyles } from "./HeaderBar.css";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
// import CustomDialogBox from "../../../../CustomDialogBox/CustomDialogBox";
import { withRouter } from "react-router";

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      mobileOpen: false,
    };
  }

  handleToggleDrawer = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    });
  };

  handleDialogOpen = () => {
    this.setState({
      dialogOpen: true,
    });
  };

  handleDialogClose = () => {
    this.setState({
      dialogOpen: false,
    });
  };

  handleLogout = async () => {
    this.props.adminLogout();
    this.handleDialogClose();
  };

  render() {
    const { classes, open, schoolDetails } = this.props;

    return (
      <div>
        <div className={classes.sectionMobile}>
          <AppBar>
            <Toolbar position="fixed" className={classes.toolbar}>
              <div style={{ flexGrow: 1 }}>
                <IconButton onClick={this.handleToggleDrawer}>
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {this.state.mobileOpen === true && (
            <MobileDrawer
              schoolDetails={schoolDetails}
              mobileOpen={this.state.mobileOpen}
              handleToggleDrawer={this.handleToggleDrawer}
            />
          )}
        </div>
        <div className={classes.sectionDesktop}>
          <AppBar
            position="fixed"
            elevation={0}
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar
              className={classes.toolbar}
              style={{ paddingLeft: open === false && 0 }}
            >
              <IconButton
                disableRipple
                onClick={this.props.handleDrawerOpen}
                edge="start"
                className={clsx(classes.drawerMenuButton, {
                  [classes.hide]: open,
                })}
              >
                <MenuIcon style={{ width: 25, height: 25 }} />
              </IconButton>
              {open === false && (
                <b style={{ color: "#1658BAA", fontSize: "1.2rem" }}>
                  Pokemons
                </b>
              )}
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(withRouter(HeaderBar));
