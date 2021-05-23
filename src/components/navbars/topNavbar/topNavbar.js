import React from "react";
import clsx from "clsx";
import { useHistory } from "react-router";
import { makeStyles, Hidden, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

// import { LocalStorageKeys } from "../../../utils";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "@material-ui/core";
import { SideNavBar } from "..";
import { Btn } from "../../../components";
import { NavBarArr } from "../../../utils";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    zIndex: theme.zIndex.drawer + 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  title: {
    display: "block",
    color: theme.palette.secondary.main,
    fontSize: theme.fontSize.font.h4,
    cursor: "pointer",
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    "&:hover": {},
  },
  titleActive: {
    borderBottom: "2px solid #1a73e8",
  },
  titleContainer: {
    marginLeft: theme.spacing(2),
  },
  header: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },
  menuIcon: {
    // display: "none",
    // [theme.breakpoints.up("md")]: {
    //   display: "block",
    // },
  },
}));

export const TopNavBar = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const [state, setState] = React.useState({
    openSideNavBar: false,
  });

  const handleContact = () => {
    alert("oh yeah");
  };

  const toogleSideNavBar = () => {
    setState({
      ...state,
      openSideNavBar: !state.openSideNavBar,
    });
  };
  let location = window.location.pathname;
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid container>
            <Grid className={classes.header} item xl={3} lg={2} md={3} sm={8}>
              <Grid container>
                <Hidden mdUp>
                  <Grid item sm={2} xs={3}>
                    <IconButton
                      className={classes.menuIcon}
                      onClick={toogleSideNavBar}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Grid>
                </Hidden>
                <Grid className={classes.header} item sm={10} xs={9}>
                  <div className={classes.titleContainer}>
                    <Typography variant="h6" noWrap>
                      Explore World
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Hidden smDown>
              <Grid className={classes.header} item xl={7} lg={8} md={7}>
                <Grid container>
                  {NavBarArr.map((v, i) => {
                    return (
                      <Grid item xs={2}>
                        <Typography
                          onClick={() => history.push(v.link)}
                          className={clsx(classes.title, {
                            [classes.titleActive]: location === v.link,
                          })}
                          variant="h6"
                          noWrap
                        >
                          {v.name}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Hidden>

            <Grid className={classes.header} item xl={2} lg={2} md={2} sm={4}>
              <div>
                <Btn
                  label="Contact Us"
                  size="medium"
                  fullWidth={false}
                  onClick={() => handleContact()}
                />
              </div>
            </Grid>
            <Drawer
              open={state.openSideNavBar}
              variant={"temporary"}
              anchor="left"
              onClose={toogleSideNavBar}
            >
              <div style={{ width: 240 }}>
                <SideNavBar isMobile={true} />
              </div>
            </Drawer>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
