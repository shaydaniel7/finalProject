import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { CssBaseline } from '@material-ui/core';
import "./darkMode.css"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiPaper-root": {
      borderRadius: "100px",
  
    }
  }
}));

function DarkMode(props) {

  console.log(this, props)

  const classes = useStyles();
  const icon = !props.theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(props.theme ? light : dark);

  return (
 
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Paper elevation={0} >
        <div className={classes.root}>
          <IconButton edge="end" color="inherit" aria-label="mode" onClick={() => props.setTheme(!props.theme)}>
            {icon}
          </IconButton>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export const light = {
  palette: {
    type: "light",
    background: { default: "#ffffff" },
  }
};
export const dark = {
  palette: {
    type: "dark",
    background: { default: "#424242" },   
    },   
  }

//Change in darkmode//
export default DarkMode;

