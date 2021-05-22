import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

// import { LocalStorageKeys } from "../../../utils";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "@material-ui/core";
import { SideNavBar } from "..";
import { Btn } from "../../../components";
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
  },
  titleContainer: {
    marginLeft: theme.spacing(2),
  },
  menuIcon: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export const TopNavBar = (props) => {
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

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuIcon} onClick={toogleSideNavBar}>
            <MenuIcon htmlColor="white" />
          </IconButton>

          <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h6" noWrap>
              Explore
            </Typography>
          </div>

          <div className={classes.grow} />

          <Btn
            label="Contact Us"
            size="small"
            fullWidth={false}
            onClick={() => handleContact()}
          />

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
        </Toolbar>
      </AppBar>
    </div>
  );
};
