const drawerWidth = 200;
export const useStyles = (theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up(650)]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down(650)]: {
      display: "flex",
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolbar: {
    display: "flex",
    paddingTop: 5.5,
    paddingBottom: 5.5,
    backgroundColor: "#A151A0",
  },
  drawerMenuButton: {
    display: "flex",
    alignItems: "center",
    marginLeft: 5,
    color: "black",
    height: 50,
  },
  hide: {
    display: "none",
  },
  tooltip: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});
