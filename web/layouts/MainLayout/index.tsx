import {AppBar, IconButton, makeStyles, Box} from "@material-ui/core";
import React from "react"


const useStyles = makeStyles({
    root: {
        position: 'absolute',
        zIndex: 1,
        height: 71,
        boxShadow: '0px 15px 40px #E9E9E9',
        backgroundColor: '#FFFFFF'
    },
    boxBurger: {
        position: 'absolute',
        left: '8%',
        height: '100%',
        padding: 0,
        display: 'flex',
        alignItems: 'center'
    },
    imgBurger: {
        height: '30%',
        width: 'auto',

    },
    logoBox: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    }
})

type Props = {
    children: React.ReactNode
    className?: string
}

export const HomeLayout = (props: Props) => {

    const classes = useStyles()
    const {children} = props
    return (
        <React.Fragment>
            <AppBar className={classes.root} position="static">
                <Box className={classes.boxBurger}>
                    <img className={classes.imgBurger} src="/images/Homepage/burger.svg" alt="menu"/>
                </Box>
                <Box className={classes.logoBox}>
                    <img src="/images/logo.svg" alt=""/>
                </Box>
            </AppBar>
            <main>
                {children}
            </main>
        </React.Fragment>
    )
}
