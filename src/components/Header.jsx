import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Header() {

    const useStyles = makeStyles(() => ({

        appBar:{
            backgroundColor: "#eebb4d",
            alignItems: "center"
        },
        headerText:{
            color: "#204051",
            fontFamily: "Roboto",
            fontWeight: "700"
        }

    }))

    const classes = useStyles()

    return (

        <AppBar position="sticky" className={classes.appBar}>
            <CssBaseline/>
            <Toolbar>
                <Typography component="h1" variant="h4" className={classes.headerText}>
                    Note Taker
                </Typography>
            </Toolbar>
        </AppBar>

    )

}

export default Header