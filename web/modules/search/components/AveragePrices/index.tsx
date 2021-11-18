import {Box, makeStyles, Table, Typography} from "@material-ui/core";
import TableHeadComponent from "./TableHead"
import TableBodyComponent from "./TableBody";
import mockData from "../../../../mocks/averagePrices"

const useStyles = makeStyles(theme => ({
    root: {
        margin: "24px 12px"
    },
    titleBox: {
        padding: "0 12px",

    },
    descriptionBox: {
        padding: "0 12px",
        marginTop: "6px"
    },
    description: {
        color: theme.palette.grey[100]
    },
    table: {
        marginTop: "16px"
    }
}))


const AveragePrices = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root} m={12}>
            <Box className={classes.titleBox}>
                <Typography variant="h4">
                    Average prices in Singapore
                </Typography>
            </Box>
            <Box className={classes.descriptionBox}>
                <Typography variant="body1" className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </Box>

            <Table size="small" className={classes.table}>
                <TableHeadComponent/>
                <TableBodyComponent prices={mockData}/>
            </Table>
        </Box>
    )
}

export default AveragePrices