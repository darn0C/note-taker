import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

function Note() {

    const useStyles = makeStyles((theme) => ({

        noteSurface:{
            backgroundColor: "#e0dede",
            margin: theme.spacing(2),
            height: "150px",
            width: "250px"
        },
        noteTitle:{
            paddingTop: theme.spacing(1),
            color: "#07031a",
            fontWeight: "700"
        },
        noteContent:{
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(1),
            color: "#3b6978",
            lineHeight: "1"
        }

    }))

    const classes = useStyles()

    return (

        <Paper elevation={9} className={classes.noteSurface}>
            <Typography align="center" component="h1" variant="h5" className={classes.noteTitle}>
                Appointment
            </Typography>
            <Typography align="left" component="h1" variant="h6" className={classes.noteContent}>
                Go to the doctor in Street Av. at 13:00
            </Typography>
        </Paper>

    )

}

export default Note