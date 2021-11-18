import {Box, Grid, makeStyles, Typography,
    FormControlLabel, Checkbox} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    root: {
        margin: "28px 24px 34px",
        paddingBottom: "22px",
        borderBottom: "1px solid #989898",
    },
    title: {
      margin: "0 4px"
    },
    variants: {
        margin: "18px 3px 0"
    },
    checkbox: {
        color: theme.palette.primary.main,
        transform: "scale(1.2)",
    }
}))

const FeaturesAmenities = () => {
const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                <Typography variant="h6">
                    Features & amenities
                </Typography>
            </Box>
            <Box className={classes.variants}>
                <Grid container>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={classes.checkbox}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Primary"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={classes.checkbox}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Primary"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    className={classes.checkbox}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Primary"
                        />
                    </Grid>

                </Grid>
            </Box>
        </Box>
    )
}

export default FeaturesAmenities
