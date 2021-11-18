import {Box, makeStyles, Typography} from "@material-ui/core";
import Grey2Typography from "../../../../../components/Typographies/Grey2Typography";

const useStyles = makeStyles(theme => ({
    dates: {
        display: "flex",
        flexDirection: "row",
        padding: "10px 0"
    },
    oneDate: {
        position: 'relative',
        width: "100%",
        "&:last-child": {
            borderLeft: "1px solid #E1E0E3"
        },
        padding: "0 8px"
    },
    oneDateHeader: {
        fontWeight: 600
    },
    oneDateDescription: {

    },
    image: {
        position: 'absolute',
        right: '8px',
        top: '20px'
    }
}))

const Dates = () => {
    const classes = useStyles()
    return (
        <Box className={classes.dates}>
            <Box className={classes.oneDate}>
                <Box>
                    <Typography variant="caption" className={classes.oneDateHeader}>
                        MOVE IN
                    </Typography>
                </Box>
                <Box className={classes.oneDateDescription}>
                    <Grey2Typography variant="body1" >
                        Not sure yet
                    </Grey2Typography>
                </Box>
                <Box className={classes.image}>
                    <img src="/images/SearchLocation/calendar.svg" alt="calendar"/>
                </Box>
            </Box>
            <Box className={classes.oneDate}>
                <Box >
                    <Typography variant="caption" className={classes.oneDateHeader}>
                        MOVE OUT
                    </Typography>
                </Box>
                <Box className={classes.oneDateDescription}>
                    <Grey2Typography variant="body1" >
                        Monthly Ongoing
                    </Grey2Typography>
                </Box>
                <Box className={classes.image}>
                    <img src="/images/SearchLocation/calendar.svg" alt="calendar"/>
                </Box>
            </Box>
        </Box>
    )
}

export default  Dates