import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme=> ({
    root: {
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "14px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
            "& $title": {
                color: "#FFFFFF",
            },
            "& $description": {
                color: "#FFFFFF",
            }
        }
    },
    titleBox: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "6px"
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 700,
    },
    descriptionBox: {
        display: "flex",
        justifyContent: "center"
    },
    description: {
        color: theme.palette.primary.main,
        fontSize: "12px",
    }
}))

const Option = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box className={classes.titleBox}>
                <Typography className={classes.title}>
                    XXS
                </Typography>
            </Box>
            <Box className={classes.descriptionBox}>
                <Typography className={classes.description}>
                    16sq ft
                </Typography>
            </Box>
        </Box>
    )
}

export default Option