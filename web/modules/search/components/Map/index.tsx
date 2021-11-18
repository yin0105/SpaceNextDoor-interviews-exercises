import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        position: "relative",
        marginTop: "-20px",
        marginBottom: "-60px"
    },
    image: {
        width: "100%"
    }
})

const Map = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <img className={classes.image} src="/images/SearchLocation/map.svg" alt="map" />
        </Box>
    )
}

export default Map