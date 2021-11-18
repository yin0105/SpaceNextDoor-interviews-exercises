import {Box, Grid, makeStyles, Typography, Button} from '@material-ui/core'
import OneMiniSquare from "./OneMiniSquare";


const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: "18px"
    },
    box: {
        boxShadow: '0px 15px 40px #E9E9E9',
        borderRadius: '15px',
        width: "90%",
        overflow: 'hidden'
    },
    itemGrid: {
        display: "flex",
        position: 'relative',
    }
})

const Rectangle = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Box className={classes.box}>
                <Grid container spacing={1} >
                    <Grid item xs={6} className={classes.itemGrid}>
                        <OneMiniSquare src={'/images/Rectangle/home.svg'} alt={'Home renovations'}
                                   title={'Home renovations'} last={false}/>
                    </Grid>
                    <Grid item xs={6} className={classes.itemGrid}>
                        <OneMiniSquare src={'/images/Rectangle/box.svg'} alt={'Decluttering'} title={'Decluttering'}
                                   last={false}/>
                    </Grid>
                    <Grid item xs={6} className={classes.itemGrid}>
                        <OneMiniSquare src={'/images/Rectangle/inventory.svg'} alt={'Inventory'}
                                   title={'Business Inventory'} last={false}/>
                    </Grid>
                    <Grid item xs={6} className={classes.itemGrid}>
                        <OneMiniSquare src={'/images/Rectangle/size.svg'} alt={'Calculator'}
                                   title={'Try our size calculator!'} last={true}/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Rectangle