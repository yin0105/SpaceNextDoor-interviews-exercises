import {Box, makeStyles} from "@material-ui/core";
import Header from "./Header";
import SizeEstimator from "./SizeEstimator";
import MonthlyPriceRange from "./MonthlyPriceRange";
import FeaturesAmenities from "./FeaturesAmenities";
import Actions from "./Actions";

const useStyles = makeStyles({
    root: {
        position: "fixed",
        top: "0px",
        left: "0px",
        zIndex: 100,
        maxHeight: "100vh",
        width: "100%",
        backgroundColor: "#FFFFFF",
        overflow: "scroll"
    },
    hidden: {
        display: "none"
    }
})

const FilterPage = (props) => {
    const {hidden, setHidden} = props
    const classes = useStyles()
    return (
            <Box className={hidden ? classes.root : classes.hidden}>
                <Header hidden={hidden} setHidden={setHidden} />
                <SizeEstimator />
                <MonthlyPriceRange />
                <MonthlyPriceRange />
                <FeaturesAmenities />
                <Actions />
            </Box>
    )
}

export default FilterPage
