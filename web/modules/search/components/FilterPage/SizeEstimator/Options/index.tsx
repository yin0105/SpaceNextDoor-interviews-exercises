import {Box, Grid, makeStyles} from "@material-ui/core";
import Option from "./Option";

const useStyles = makeStyles({
    root: {

    }
})

const Options = () => {
    const classes = useStyles()
    return (
        <Grid container spacing={6}>
            <Grid item xs={4} >
                <Option />
            </Grid>
            <Grid item xs={4} >
                <Option />
            </Grid>
            <Grid item xs={4} >
                <Option />
            </Grid>
            <Grid item xs={4} >
                <Option />
            </Grid>
            <Grid item xs={4} >
                <Option />
            </Grid>
            <Grid item xs={4} >
                <Option />
            </Grid>
            <Grid item xs={4} >
                <Option />
            </Grid>
        </Grid>
    )
}

export default Options