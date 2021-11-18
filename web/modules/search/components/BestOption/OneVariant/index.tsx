import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    oneVariant: {
        display: "flex",
        alignItems: "center",
        border: "1px solid #E9E9E9",
        borderRadius: "15px",
        padding: "0 14px",
        marginBottom: "6px"
    },
    variantDescription: {
        color: "#888888",
    },
    beforePrice: {
        padding: "10px 10px 5px 0",
        margin: "5px 0",
        borderRight: "2px dashed #E1E0E3",
        width: "200px"
    },
    sizeBox: {

    },
    price: {
        color: theme.palette.primary.light,
        paddingLeft: "14px"
    },
}))

const OneVariant = () => {
    const classes = useStyles()
    return (
        <Box className={classes.oneVariant}>
            <Box className={classes.beforePrice}>
                <Box className={classes.sizeBox}>
                    <Typography variant="h5">
                        4' x 6' unit
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="caption" className={classes.variantDescription}>
                        Climate controlled, Roll up door, Interior, Floor-2
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h3" className={classes.price}>
                    $114.75
                </Typography>
            </Box>
        </Box>
    )
}

export default OneVariant