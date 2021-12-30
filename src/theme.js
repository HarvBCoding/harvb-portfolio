import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: '"Sacramento", Open Sans',
        },
        h2: {
            fontFamily: '"Sacramento", Open Sans',
        },
        h3: {
            fontFamily: '"Sacramento", Open Sans',
            fontSize: '3.4rem'
        },
        h6: {
            fontFamily: '"Give You Glory", Open Sans'
        },
        subtitle1: {
            fontFamily: '"Give You Glory", Open Sans',
            fontWeight: 'Bold',
            fontSize: '20px'
        }
    }
})

export default theme;