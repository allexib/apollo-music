import {createTheme} from '@mui/material/styles'
import {teal, purple} from '@mui/material/colors';

const theme = createTheme({
    palette: {
        mode:'dark',
        /*background:purple,*/
        primary: teal,
        secondary: purple
    }
})

export default theme