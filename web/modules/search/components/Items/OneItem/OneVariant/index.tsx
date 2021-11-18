import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    oneVariant: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #E9E9E9",
        borderRadius: "15px",
        padding: "0 14px",
        marginBottom: "6px"
    },
    variantDescription: {
        color: "#888888",
    },
    boxBeforePrice: {
        padding: "10px 10px 5px 0",
        margin: "5px 0",
        borderRight: "2px dashed #E1E0E3",
        width: "190px"
    },
    price: {
        color: theme.palette.primary.light,
        paddingLeft: "10px"
    },
}))

type Variant = {
    title:string,
    description:string,
    price:number
}

type Props = {
    variant:Variant
}

const OneVariant = (props:Props) => {
    const classes = useStyles()
    const {variant: {title,description, price}} = props
    return (
        <Box className={classes.oneVariant}>
            <Box className={classes.boxBeforePrice}>
                <Box>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="caption" className={classes.variantDescription}>
                        {description}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography variant="h3" className={classes.price}>
                    ${price}
                </Typography>
            </Box>
        </Box>
    )
}

export default OneVariant