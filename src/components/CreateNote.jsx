import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

function CreateNote() {

    const useStyles = makeStyles((theme) => ({

        createNoteArea: {
            marginTop: theme.spacing(1),
            "& .MuiInput-underline:after": {
                borderBottom: "2px solid #eebb4d"
            },
            "& .MuiFormLabel-root.Mui-focused": {
                color: "#204051"
            }
        },
        textInput: {
            margin: theme.spacing(1),
            width: "95%",
        }

    }))

    const classes = useStyles()

    return (

        <Paper className={classes.createNoteArea}>
            <TextField id="filled-basic" label="Note Title" className={classes.textInput}/>
            <TextField id="filled-basic" label="Note Content" multiline rows={3} rowsMax={3}
                       className={classes.textInput}/>
        </Paper>

    )

}

export default CreateNote