import {Button, withStyles} from "@material-ui/core";

const PrimaryButton = withStyles(theme=>({
    root: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "14px",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
        },
        width: "100%",
        padding: "15px 0"
    }
}))(Button)


export default PrimaryButton