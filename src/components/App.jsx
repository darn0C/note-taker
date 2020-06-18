import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Header from "./Header";
import Note from "./Note";

function App() {

    const useStyles = makeStyles((theme) => ({

        root: {
            height: "100vh",
            backgroundColor: "#ddf3f5",
            backgroundImage: "url(https://www.transparenttextures.com/patterns/always-grey.png)",
            "& .MuiIconButton-root:hover": {
                backgroundColor: "#FDCD5B",
                color: "#204051"
            }
        },
        addButton: {
            marginTop: theme.spacing(2),
            backgroundColor: "#eebb4d",
            color: "#204051",
        }

    }))

    const classes = useStyles()

    return (

        <Grid container direction="column" className={classes.root}>
            <Header/>
            <Grid container direction="column" justify="flex-start" alignItems="center">
                <IconButton className={classes.addButton}>
                    <AddIcon/>
                </IconButton>
            </Grid>
            <Note/>
        </Grid>

    )

}

export default App