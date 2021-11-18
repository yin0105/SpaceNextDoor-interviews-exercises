import {Box, InputBase, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    root: {
        position: "relative",
    },
    input: {
        fontSize: '12px',
        backgroundColor: "#FFFFFF",
        borderRadius: "15px",
        padding: "18px 15px",
        paddingLeft: "50px",
        '&::placeholder': {
            opacity: '1',
            color: theme.palette.grey[100],
        }
    },
    searchIcon: {
        position: "absolute",
        left: "17px",
        top: "16px",
        zIndex: 2,
    }
}))

const Search = () => {
const classes = useStyles()
    return (
        <Box className={classes.root} >
            <Box className={classes.searchIcon}>
                <img src="/images/Homepage/SearchIcon.svg" alt="SearchIcon"/>
            </Box>
            <InputBase classes={{input:classes.input}} fullWidth placeholder="Where do you need space?"/>
        </Box>
    )
}

export default Search