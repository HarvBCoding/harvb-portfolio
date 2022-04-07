import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: '"Sacramento", Open Sans',
            color: 'var(--dark-grey)'
        },
        h2: {
            fontFamily: '"Sacramento", Open Sans',
        },
        h3: {
            fontFamily: '"Sacramento", Open Sans',
            fontSize: '3.4rem'
        },
        h5: {
            fontFamily: '"Sacramento", Open Sans',
            fontSize: "2.75rem",
        },
        h6: {
            fontFamily: '"Give You Glory", Open Sans'
        },
        subtitle1: {
            fontFamily: '"Give You Glory", Open Sans',
            fontWeight: 'Bold',
            fontSize: '20px',
            color: 'var(--dark-grey)'
        }
    },
})

export default theme;