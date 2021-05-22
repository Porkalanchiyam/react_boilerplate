import React from "react";

import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const Btn = (props) => {
  return (
    <>
      <Button
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        className={props.classes}
        variant={props.variant}
        color={props.color}
        disabled={props.disabled}
        disableElevation={props.disableElevation}
        disableFocusRipple={props.disableFocusRipple}
        disableRipple={props.disableRipple}
        fullWidth={props.fullWidth}
        size={props.size}
        onClick={props.onClick}
      >
        {props.label}
      </Button>
    </>
  );
};
export default Btn;
Btn.propTypes = {
  classes: PropTypes.object,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  color: PropTypes.string,
  variant: PropTypes.string,
  disableRipple: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableElevation: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  size: PropTypes.string,
};

Btn.defaultProps = {
  variant: "contained",
  size: "small",
  color: "primary",
  fullWidth: true,
};
