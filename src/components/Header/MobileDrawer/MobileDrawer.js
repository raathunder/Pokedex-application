import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";

import { useStyles } from "./MobileDrawer.css";
import MenuDrawer from "../MenuDrawer/MenuDrawer";

class MobileDrawer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <SwipeableDrawer
        anchor="left"
        open={this.props.mobileOpen}
        onOpen={this.props.handleToggleDrawer}
        onClose={this.props.handleToggleDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div
          style={{
            display: "flex",
            padding: 10,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#eee",
          }}
        >
          Pokemons
        </div>
        <Divider />
        <MenuDrawer role={this.props.role} />
      </SwipeableDrawer>
    );
  }
}

export default withStyles(useStyles)(MobileDrawer);
