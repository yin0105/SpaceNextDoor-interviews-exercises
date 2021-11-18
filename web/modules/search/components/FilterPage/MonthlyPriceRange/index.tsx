import {Box, makeStyles, Slider, Typography, withStyles} from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles({
    root: {
        margin: "26px 26px 0",
        borderBottom: "1px solid #989898"
    },
    sliderBox: {
        margin: "54px 28px 0"
    }
})

const marks = [
    {
        value: 0,
        label: '$'
    },
    {
        value: 100,
        label: '$$$$'
    },
]

const CustomSlider = withStyles(theme=>({
    root: {
        color: theme.palette.secondary.main,
        height: "8px",
    },
    thumb: {
        height: "20px",
        width: "20px",
        marginTop: "-8px",
        marginLeft: "-12px",
        backgroundColor: "#FFFFFF",
        border: `2px solid ${theme.palette.secondary.main}`,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50%)',
        "& *": {
            backgroundColor: "black",
            color: "#FFFFFF",
            fontSize: "1rem"
        }
    },
    track: {
        height: 5,
        borderRadius: 4,
    },
    rail: {
        height: 4,
        borderRadius: 4,
        color: theme.palette.grey[100]
    },
    mark: {
        color: "#FFFFFF",
        top: "34px",
        marginBottom: "8px"
    }

}))(Slider)

const MonthlyPriceRange = () => {
    const classes = useStyles()
    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box className={classes.root}>
            <Box>
                <Typography variant="h6">
                    Monthly Price Range
                </Typography>
            </Box>
            <Box className={classes.sliderBox}>
                <CustomSlider

                    marks={marks}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                    aria-labelledby="range-slider"
                />
            </Box>
        </Box>
    )
}

export default MonthlyPriceRange
