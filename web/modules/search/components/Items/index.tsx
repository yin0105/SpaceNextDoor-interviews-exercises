import {Box, makeStyles, Typography} from "@material-ui/core";
import OneItem from "./OneItem";
import mockData from "../../../../mocks/greatOptions"

const useStyles = makeStyles({

})

const Items = () => {
    const classes = useStyles()
    return (
        <Box mr={5} ml={5} mt={40}>
            <Box mb={8} ml={7}>
                <Typography variant="h4">
                    Other great options for you:
                </Typography>
            </Box>
            {mockData.map(info =>
                <OneItem key={info.title} info={info} />
            )}
        </Box>
    )
}

export default Items