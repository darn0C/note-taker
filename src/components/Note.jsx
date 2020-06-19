import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function Note(props) {

    const useStyles = makeStyles((theme) => ({

        noteSurface:{
            backgroundColor: "#e0dede",
            margin: theme.spacing(2),
            width: "250px",
        },
        noteTitle:{
            marginTop: "0px",
            marginBottom: theme.spacing(1),
            color: "#07031a",
            fontWeight: "700",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            textAlign: "center"
        },
        noteContent:{
            marginTop: theme.spacing(1),
            marginLeft: theme.spacing(1),
            fontSize: "20px",
            color: "#3b6978",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            overflow: "hidden",
            textOverflow: "ellipsis"
        },
        deleteButton:{
            color: "#917430",
            position: "relative",
            float: "right"
        }

    }))

    const classes = useStyles()

    function deleteNote () {
        props.onDelete(props.id)
    }

    return (

        <Paper elevation={9} className={classes.noteSurface}>
            <h1 className={classes.noteTitle}>{props.title}</h1>
            <p className={classes.noteContent}>{props.content}</p>
            <Button onClick={deleteNote} className={classes.deleteButton}>Delete</Button>
        </Paper>

    )

}

export default Note