export const useStyles = (theme) => ({
  drawerPaper: {
    paddingTop: 50,
    width: 200,
    backdropFilter: `blur(4px)`,
    [theme.breakpoints.down(700)]: {
      paddingTop: 0,
    },
  },
  theme: {
    direction: "rtl1",
  },
  toolbar: {
    paddingBottom: 11,
    backgroundColor: "#004f71",
  },
});
