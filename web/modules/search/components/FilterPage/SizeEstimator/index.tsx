import {Box, makeStyles, Typography} from "@material-ui/core";
import Options from "./Options";

const useStyles = makeStyles({
    root: {
        margin: "26px 26px 0",
        paddingBottom: "30px",
        borderBottom: "1px solid #989898"
    },
    beforeTitle: {
        display: "flex",
        margin: "0 4px"
    },
    ask: {
        marginLeft: "8px"
    },
    title: {
        margin: "8px 2px 12px"
    },
    options:{

    }
})

const SizeEstimator = () => {
const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box className={classes.beforeTitle}>
                <Box>
                    <img src="/images/SearchLocation/help.svg" alt="help"/>
                </Box>
                <Box className={classes.ask}>
                    <Typography>
                        Need help estimating the size you need?
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.title}>
                <Typography variant="h5">
                    Size Estimator
                </Typography>
            </Box>
            <Box className={classes.options}>
                <Options />
            </Box>
        </Box>
    )
}

export default SizeEstimator
