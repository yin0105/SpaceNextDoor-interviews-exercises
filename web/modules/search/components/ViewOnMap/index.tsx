import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    root: {
        position: "absolute",
        left: "32px",
        top: "-32px"
    },
    text: {
        color: theme.palette.primary.main
    }
}))

const ViewOnMap = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Typography variant="body1" className={classes.text}>
                View facilites on map
            </Typography>
        </Box>
    )
}

export default ViewOnMap