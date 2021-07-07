export const useStyles = (theme) => ({
  root: {
    color: "#181818",
    minHeight: "100vh",
    backgroundColor: "#eee",
    overflow: "hidden",
    //width
    "&::-webkit-scrollbar": {
      width: 10,
    },

    //Track
    "&::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },

    // Handle
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      background: "#00acd4",
    },

    // Handle on hover
    "&::-webkit-scrollbar-thumb:hover": {
      background: "grey",
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  ListItemText: {
    fontSize: 14,
    paddingLeft: 16,
    paddingRight: 26,
    color: "#181818",
    [theme.breakpoints.up("md")]: {
      color: "#181818",
    },
  },
  iconStyle: {
    width: 10,
    height: 10,
    [theme.breakpoints.up("md")]: {
      width: 13,
      height: 13,
    },
  },
  sublist: {
    textDecoration: "none",
    outline: "none",
    color: "#181818",
    "&:hover": {
      color: "#8f8f8f",
    },
    "&:active": {
      color: "#8f8f8f",
    },
  },
});
