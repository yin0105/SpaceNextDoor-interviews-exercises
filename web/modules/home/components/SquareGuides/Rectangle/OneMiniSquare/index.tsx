import {Box, makeStyles, Typography} from "@material-ui/core";
import WhiteTypography from "../../../../../../components/Typographies/WhiteTypography";


const useStyles = makeStyles(theme=>({
    root: {
        width: '100%',
        padding: "23px 20px",
    },
    rootLast: {
        width: '100%',
        padding: "23px 20px",
        backgroundColor: theme.palette.primary.main
    },
    imgBox: {
        position: 'relative',
        width: '100%',
        paddingBottom: '20px'
    },
    img: {},
    textBox: {
        position: 'relative',
        width: '100%'
    }
}))

type Props = {
    src: string,
    alt: string,
    title: string,
    last: boolean
}

const OneMiniSquare = (props: Props) => {
    const {src, alt, title, last} = props
    const classes = useStyles()
    return (
        <Box className={last ? classes.rootLast : classes.root}  >
            <Box className={classes.imgBox}>
                <img className={classes.img} src={src} alt={alt}/>
            </Box>
            <Box className={classes.textBox}>
                {last ? <WhiteTypography variant="h5">{title}</WhiteTypography> : <Typography variant="h5">{title}</Typography>}
            </Box>
        </Box>
    )
}

export default OneMiniSquare