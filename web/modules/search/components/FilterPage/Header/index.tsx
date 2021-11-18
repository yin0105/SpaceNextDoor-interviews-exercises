import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        position: "relative",
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        paddingBottom: "8px",
        borderBottom: "1px solid #989898"
    },
    image: {
        cursor: "pointer",
        position: "absolute",
        top: "3px",
        left: "24px"
    }
})

const Header = (props) => {
const classes = useStyles()
    const {hidden, setHidden} = props
    function hiddenHandle () {
        setHidden(!hidden)
    }


    return (
         <Box className={classes.root}>
            <Typography variant="h3">
                Filters
            </Typography>
            <Box className={classes.image} onClick={hiddenHandle}>
                <img src="/images/SearchLocation/close.svg" alt="close" />
            </Box>
        </Box>
    )
}

export default Header
