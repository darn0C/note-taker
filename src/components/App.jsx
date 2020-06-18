// IMPORT STATEMENTS //

import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Popper from "@material-ui/core/Popper";
import Header from "./Header";
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
        addButton: {
            marginTop: theme.spacing(2),
            backgroundColor: "#eebb4d",
            color: "#204051",
        }

    }))

// MATERIAL UI STYLE HOOKS //

    const classes = useStyles()

// REACT HOOKS //

    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(false);

// COMPONENT FUNCTIONS //

    function handleMenu(event) {

        setAnchorEl(event.currentTarget)
        if (isMenuOpen === false) {
            setIsMenuOpen(true)
        } else if (isMenuOpen === true) {
            setIsMenuOpen(false)
        }
    }

// RETURN STATEMENT //

    return (

// ROOT COMPONENT //

        <Grid container direction="column" className={classes.root}>

            {/* HEADER COMPONENT */}

            <Header/>

            {/* BUTTON COMPONENT */}

            <Grid container direction="column" justify="flex-start" alignItems="center">
                <IconButton onClick={handleMenu} className={classes.addButton}>
                    {isMenuOpen ? <RemoveIcon/> : <AddIcon/>}
                </IconButton>
                <Popper open={isMenuOpen} anchorEl={anchorEl}>
                    <div>
                        <h2>Hello World</h2>
                    </div>
                </Popper>
            </Grid>

            {/* GENERATED NOTES */}

            <Note/>

        </Grid>

    )

}

// EXPORT STATEMENT //

export default App