import {Box, makeStyles, Typography, Button, Grid} from "@material-ui/core";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import OneVariant from "./OneVariant";
import Description from "./Description";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "20px"
    },
    header: {
        display: "flex",
        marginBottom: "5px"
    },
    mainBoxCard: {
        margin: "10px 24px"
    },

    image: {
        width: "100%"
    },
    fullWidth: {
        width: "100%"
    },

    textButton: {
        fontWeight: 700,
        fontSize: "1.3rem",
        color: "#FFFFFF"
    }
}))

type Variant = {
    size: string,
    options: string,
    cost: number
}

type Info = {
    title: string,
    location: string,
    rating: number,
    variant: Variant[]
}

type Props = {
    info: Info
}

const BestOption = () => {
    const classes = useStyles()
    // const {info: {title, location, rating, variant}} = props
    return (
        <Box className={classes.root}>
            <Box>
                <img src="/images/SearchLocation/topPics.svg" alt="top pics"/>
            </Box>


            <Box className={classes.mainBoxCard}>
                <Box className={classes.header}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Box className={classes.fullWidth}>
                                <img className={classes.image} src="images/SearchLocation/topPic.png"/>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Description/>
                        </Grid>
                    </Grid>
                </Box>

                <OneVariant/>
                <OneVariant/>
                <OneVariant/>

                <Box pt={5}>
                    <PrimaryButton>
                        <Typography className={classes.textButton}>
                            VIEW ALL THE OPTIONS
                        </Typography>
                    </PrimaryButton>
                </Box>
            </Box>
        </Box>
    )
}

export default BestOption