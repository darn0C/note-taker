import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function CreateNote(props) {

    const useStyles = makeStyles((theme) => ({

        createNoteArea: {
            marginTop: theme.spacing(1),
            "& .MuiInput-underline:after": {
                borderBottom: "2px solid #eebb4d"
            },
            "& .MuiFormLabel-root.Mui-focused": {
                color: "#204051"
            },
            "& .MuiButton-root:hover": {
                backgroundColor: "#FDCD5B"
            }
        },
        textInput: {
            marginLeft: theme.spacing(1),
            width: "95%"
        },
        submitNoteButton: {
            margin: theme.spacing(1),
            backgroundColor: "#eebb4d",
            textAlign: "center",
            color: "#204051",
            width: "95%"
        }

    }))

    const classes = useStyles()

    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    function handleChange(event) {

        const {name, value} = event.target

        setNote(prevValue => {
            if (name === "title") {
                return {
                    title: value,
                    content: prevValue.content
                }
            } else if (name === "content") {
                return {
                    title: prevValue.title,
                    content: value
                }
            }
        })

    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        })
        event.preventDefault()
    }

    return (

        <Paper className={classes.createNoteArea}>
            <form>
                <TextField id="filled-basic" label="Note Title" name="title" value={note.title} onChange={handleChange}
                           className={classes.textInput}/>
                <TextField id="filled-basic" label="Note Content" name="content" value={note.content}
                           onChange={handleChange} className={classes.textInput}/>
                <Button onClick={submitNote} className={classes.submitNoteButton}>ADD NOTE</Button>
            </form>
        </Paper>

    )

}

export default CreateNote