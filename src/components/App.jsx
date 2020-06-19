// IMPORT STATEMENTS //

import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Popper from "@material-ui/core/Popper";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";

// REACT COMPONENT FUNCTION //

function App() {

// MATERIAL UI STYLING //

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
        headerSection:{
            height: "7%"
        },
        menuSection:{
            height: "33%"
        },
        addButton: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            backgroundColor: "#eebb4d",
            color: "#204051",
        },
        noteSection: {
            display: "flex",
            flexDirection: "row"
        }

    }))

// MATERIAL UI STYLE HOOKS //

    const classes = useStyles()

// REACT HOOKS //

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);
    const [notes, setNotes] = useState([]);

// COMPONENT FUNCTIONS //

    function handleMenu(event) {

        setAnchorEl(event.currentTarget)
        if (isMenuOpen === false) {
            setIsMenuOpen(true)
        } else if (isMenuOpen === true) {
            setIsMenuOpen(false)
        }
    }

    function addNote (newNote) {

        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })

    }

    function deleteNote (id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem,index) => {
                return index !== id;
            })
        })
    }

// RETURN STATEMENT //

    return (

// ROOT COMPONENT //

        <Grid container direction="column" className={classes.root}>

            {/* HEADER COMPONENT */}
            <Grid container className={classes.headerSection}>

                <Header/>

            </Grid>
            {/* MENU COMPONENT */}

            <Grid container direction="column" justify="flex-start" alignItems="center" className={classes.menuSection}>

                <IconButton onClick={handleMenu} className={classes.addButton}>
                    {isMenuOpen ? <RemoveIcon/> : <AddIcon/>}
                </IconButton>

                <Popper open={isMenuOpen} anchorEl={anchorEl}>
                    <div>
                        <CreateNote onAdd={addNote}/>
                    </div>
                </Popper>

            </Grid>

            {/* GENERATED NOTES */}

            <Grid container direction="column" className={classes.noteSection}>

                {notes.map((noteItem,index) => {
                    return (
                        <Note
                            key={index}
                            id={index}
                            title={noteItem.title}
                            content={noteItem.content}
                            onDelete={deleteNote}
                        />
                    )
                })}

            </Grid>

        </Grid>

    )

}

// EXPORT STATEMENT //

export default App