import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { useStyles } from "./MenuDrawer.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          name: "Pokemons",
          url: "/",
        },
        {
          name: "About",
          url: "/about",
        },
      ],
    };
  }

  handleOpen = (name) => {
    const newArray = this.state.menu.map((item) =>
      item.name === name
        ? { ...item, value: !item.value }
        : { ...item, value: false }
    );
    this.setState({
      menu: newArray,
    });
  };

  handler = (children) => {
    return children.map((menu, index) => {
      return (
        <div key={index}>
          <ListItem
            button
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: 30,
            }}
          >
            <ListItemText>
              <Link to={menu.url} className={this.props.classes.sublist}>
                <b style={{ outline: "none", paddingleft: 10, fontSize: 15 }}>
                  {menu.name}
                </b>
              </Link>
            </ListItemText>
          </ListItem>
        </div>
      );
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List>{this.handler(this.state.menu)}</List>
      </div>
    );
  }
}

export default withStyles(useStyles)(withRouter(Menu));
