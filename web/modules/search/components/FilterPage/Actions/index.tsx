import {Box, makeStyles, Typography} from "@material-ui/core";
import PrimaryButton from "../../../../../components/Buttons/PrimaryButton";
import WhiteTypography from "../../../../../components/Typographies/WhiteTypography";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "space-between",
        margin: "0 24px 20px",
    },
    resetBox: {
        display: "flex",
        alignItems: "center"
    },
    reset: {
        color: theme.palette.primary.main
    },
    buttonBox: {
        width: "135px"
    },
    buttonText: {
        fontWeight: 700,
        fontSize: "1.3rem"
    }
}))

const Actions = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box className={classes.resetBox}>
                <Typography className={classes.reset}>
                    Reset filters
                </Typography>
            </Box>
            <Box className={classes.buttonBox}>
                <PrimaryButton>
                    <WhiteTypography className={classes.buttonText}>
                        Apply
                    </WhiteTypography>
                </PrimaryButton>
            </Box>
        </Box>
    )
}

export default Actions