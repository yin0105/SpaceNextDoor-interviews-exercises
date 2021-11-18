import {Box, makeStyles, Typography} from "@material-ui/core";
import Grey2Typography from "../../../../components/Typographies/Grey2Typography";

const useStyles = makeStyles({
    root: {
        padding: "84px 28px 0"
    },
    secondLine: {
        marginTop: "6px"
    },
    thirdLine: {
        marginTop: "18px"
    }
})

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box>
                <Typography variant="h4">
                    Storage units in Singapore
                </Typography>
            </Box>
            <Box className={classes.secondLine}>
                <Typography variant="h6">
                    39 storage facilities in Singapore.
                </Typography>
            </Box>
            <Box className={classes.thirdLine}>
                <Grey2Typography variant="body2">
                    Find self-storage near you
                </Grey2Typography>
            </Box>
        </Box>
    )
}

export default Header