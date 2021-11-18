import {Box, makeStyles} from "@material-ui/core";
import WhiteTypography from "../../../../../components/Typographies/WhiteTypography";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'

    }
})

const Title = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root} p={4}>
            <Box>
                <WhiteTypography variant="h1">
                    We help you to find the best storage in Singapore
                </WhiteTypography>
            </Box>
            <Box>
                <WhiteTypography variant="body2" >
                    Getting more space in your life starts here.
                </WhiteTypography>
            </Box>
        </Box>
    )
}

export default Title