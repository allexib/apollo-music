import React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material";
import {HeadsetTwoTone} from "@mui/icons-material";
import {makeStyles} from '@mui/styles'
import {createTheme, ThemeProvider} from '@mui/material/styles'

const theme = createTheme()
const useStyles = makeStyles((theme) => ({
    title: {
        paddingLeft: theme.spacing(2)
    }
}))

function Header() {
    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <AppBar color='primary' position='fixed'>
                <Toolbar>
                    <HeadsetTwoTone/>
                    <Typography className={classes.title} variant='h6' component='h1'>
                        Apollo Music Share
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header