import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import MenuDrawer from "../MenuDrawer/MenuDrawer";
import { useStyles } from "./HeaderDrawer.css";

class HeaderDrawer extends Component {
  render() {
    const { classes, open } = this.props;
    return (
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          {open === true && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                onClick={this.props.handleDrawerClose}
                // style={{ background: "transparent", paddingRight: "8px" }}
              >
                <b>Pokemons.org</b>
                {/* <p>Pokemon</p> */}
                {/* {"rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />} */}
              </IconButton>
            </div>
          )}
        </div>

        <Divider />
        <div className={classes.scrollDraw}>
          <MenuDrawer open={open} />
        </div>
      </Drawer>
    );
  }
}

export default withStyles(useStyles)(HeaderDrawer);
