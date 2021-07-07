const drawerWidth = 200;

export const useStyles = (theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  toolbar: {
    paddingTop: 5,
    paddingBottom: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.shortest,
    }),
    overflowX: "hidden",
    width: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(0),
    },
  },
  listItem: {
    padding: 20,
  },
  detailStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollDraw: {
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      //for chrome
      display: "none",
    },
  },
});
