import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    fullWidth: {
        width: "100%",
        padding: "0 10px"
    },
    featuredBox: {
        marginTop: "6px",
        display: "flex",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundColor: "#66C3D0",
    },
    impotentText: {
        fontWeight: 600,
        color: "#FFFFFF",
    },
    bestSellerBox: {
        marginTop: "12px",
        display: "flex",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundColor: "#EA5B21"
    },
    options: {
      marginTop: "16px"
    },
    oneOption: {
        display: "flex",
    },
})

const Description = () => {
    const classes = useStyles()
    return (
        <Box className={classes.fullWidth}>
            <Box className={classes.featuredBox}>
                <Typography variant="body2" className={classes.impotentText}>
                    FEATURED
                </Typography>
            </Box>
            <Box className={classes.bestSellerBox}>
                <Typography variant="body2" className={classes.impotentText}>
                    BEST SELLER
                </Typography>
            </Box>
            <Box mt={8}>
                <Typography variant="h6">
                    {/*{title}*/} Helen Li Building
                </Typography>
            </Box>
            <Box className={classes.options}>
                <Box className={classes.oneOption}>
                    <Box>
                        <img src="/images/SearchLocation/location.svg" alt="location"/>
                    </Box>
                    <Box>
                        <Typography variant="body2">
                            {/*{location}*/}Garden park avenue
                            D2, Singapore
                        </Typography>
                    </Box>
                </Box>
                <Box className={classes.oneOption}>
                    <Box>
                        <img src="/images/SearchLocation/star.svg" alt="location"/>
                    </Box>
                    <Box>
                        <Typography>
                            {/*{rating}*/}4.9
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Description