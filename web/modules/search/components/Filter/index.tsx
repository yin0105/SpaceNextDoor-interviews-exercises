import {
    Box,
    makeStyles,
    Select,
    withStyles,
    IconButton,
    MenuItem,
    InputBase,
    Typography,
    FormControl
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        margin: "0 28px"
    },
    searchBox: {
        position: "relative"
    },
    labelBox: {
        position: "absolute",
        zIndex: 1,
        left: "20px",
        top: "12px"
    },
    labelTypography: {
        color: theme.palette.grey[100]
    },
    icon: {
        right: "20px",
        top: "10px",
        width: "30px",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(/images/SearchLocation/select.svg)"
    },
    settingBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    settingButton: {
        padding: "8px 0px 8px",
        marginLeft: "16px"
    }
}))

const CustomSelect = withStyles((theme) => ({
    icon: {
        marginRight: "13px",
    }
}))(Select)

const IconComponent = (props) =>
    <img className={props.className} src="/images/SearchLocation/select.svg" alt="img"/>

const SelectInput = withStyles((theme) => ({
    input: {
        borderRadius: 14,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,

        label: "Sort by distance",
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),

        '&:focus': {
            borderRadius: 14,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const Filter = (props) => {
    const {hidden, setHidden} = props

    function hiddenHandle() {
        setHidden(!hidden)
    }

    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box flexGrow={1} className={classes.searchBox}>
                <Box className={classes.labelBox}>
                    <Typography variant="body2" className={classes.labelTypography}>
                        Sort by distance
                    </Typography>
                </Box>
                    <CustomSelect
                        fullWidth
                        IconComponent={IconComponent}
                        input={<SelectInput/>}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </CustomSelect>
            </Box>
            <Box className={classes.settingBox}>
                <IconButton className={classes.settingButton} onClick={hiddenHandle}>
                    <img src="/images/SearchLocation/settings.svg" alt="settings"/>
                </IconButton>

            </Box>
        </Box>
    )
}

export default Filter