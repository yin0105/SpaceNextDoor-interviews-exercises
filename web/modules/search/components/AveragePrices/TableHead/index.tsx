import {makeStyles, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    tableCell: {
            borderBottom: "0px"
    },
}))

const TableHeadComponent = () => {
    const classes = useStyles()
    return (
        <TableHead>
            <TableRow>
                <TableCell className={classes.tableCell}>
                    <Typography variant="body2" >Unit Size</Typography>
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                    <Typography variant="body2" >Average Price</Typography>
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                    <Typography variant="body2" >Lowest Price</Typography>
                </TableCell>
            </TableRow>
        </TableHead>
    )
}

export default TableHeadComponent