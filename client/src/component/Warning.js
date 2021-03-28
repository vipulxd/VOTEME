import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Alert, AlertTitle} from "@material-ui/lab";
import {useSelector} from "react-redux";
import {Fragment} from "react";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",

    "& > * + *": {
      marginTop: theme.spacing(2),
      backgroundColor: "#00000",
    },
  },
}));

export default function SimpleAlerts(props) {
  const Error_type = useSelector(state => state.auth.error_msg);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert varient="filled" severity="error">
        <AlertTitle>Error</AlertTitle>

        <strong> {Error_type}</strong>
      </Alert>
    </div>
  );
}
