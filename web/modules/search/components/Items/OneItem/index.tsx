import {Box, Button, Divider, makeStyles, Typography} from "@material-ui/core";
import WhiteTypography from "../../../../../components/Typographies/WhiteTypography";
import PrimaryButton from "../../../../../components/Buttons/PrimaryButton";
import OneVariant from "./OneVariant";

const useStyles = makeStyles(theme => ({
    root: {
        border: "2px solid rgba(243, 247, 249, 1)",
        borderRadius: "15px",
        padding: "28px 14px 14px",
        marginTop: "10px"
    },
    header: {
        display: "flex",
        paddingBottom: "10px"
    },
    orange: {
        display: "flex",
        justifyContent: "center",
        borderRadius: "15px",
        backgroundColor: theme.palette.secondary.main,
        marginBottom: "10px"
    },
    typographyOrange: {
      color: "#FFFFFF",
      fontWeight: 700,
        fontSize: "1rem"
    },
    property: {
        display: "flex",
    },
   action: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "4px"
    },
    textNearButton: {
        fontSize: "1.4rem",
        fontWeight: 500,
        color: theme.palette.success.main
    },
    boxButton: {
      width: "145px"
    },
    textButton: {
        fontWeight: 700,
        fontSize: "1.3rem",
        color: "#FFFFFF"
    }
}))
type Variant = {
    title:string,
    description:string,
    price:number
}

type Option = {
    title:string,
    location:string,
    stars:number,
    variants:Variant[]
}

type Props = {
    info: Option
}

const OneItem = (props: Props) => {
    const classes = useStyles()
    const {info: {title, location, stars, variants}} = props

    return (
        <Box className={classes.root}>
            <Box className={classes.header}>
                <Box >
                    <img src="images/SearchLocation/item2.png"/>
                </Box>
                <Box  pl={11} pr={23}>
                    <Box className={classes.orange}>
                        <Typography className={classes.typographyOrange}>
                            LAST BOOKED 2H AGO
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6">
                            {title}
                        </Typography>
                    </Box>
                    <Box className={classes.property}>
                        <Box>
                            <img src="/images/SearchLocation/location.svg" alt="location"/>
                        </Box>
                        <Box>
                            <Typography variant="body2">
                                {location}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={classes.property}>
                        <Box>
                            <img src="/images/SearchLocation/star.svg" alt="star"/>
                        </Box>
                        <Box>
                            <Typography>
                                {stars}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {variants.map(variant=>
            <OneVariant key={variant.title} variant={variant} />)}

            <Box className={classes.action}>
                <Box>
                    <Typography className={classes.textNearButton}>
                        First month free!
                    </Typography>
                </Box>
                <Box className={classes.boxButton}>
                    <PrimaryButton>
                        <Typography className={classes.textButton}>
                            VIEW ALL
                        </Typography>
                    </PrimaryButton>
                </Box>
            </Box>
        </Box>
    )
}

export default OneItem