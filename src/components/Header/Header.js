import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import { useStyles } from "./Header.css";
import HeaderDrawer from "./HeaderDrawer/HeaderDrawer";
import HeaderBar from "./HeaderBar/HeaderBar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleDrawerClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <HeaderBar open={open} handleDrawerOpen={this.handleDrawerOpen} />
        <div className={classes.sectionDesktop}>
          <HeaderDrawer
            open={open}
            handleDrawerClose={this.handleDrawerClose}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Header);
