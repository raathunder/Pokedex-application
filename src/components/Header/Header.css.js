export const useStyles = (theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up(650)]: {
      display: "flex",
    },
  },
});
