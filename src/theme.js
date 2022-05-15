import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: '"Sacramento", Open Sans',
            fontSize: '7rem',
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
            fontFamily: '"Give You Glory", Open Sans',
            fontSize: "1.3rem",
            fontWeight: "bold"
        },
        subtitle1: {
            fontFamily: '"Give You Glory", Open Sans',
            fontWeight: 'bold',
            fontSize: '1.3rem',
            color: 'var(--dark-grey)'
        },
        subtitle2: {
            fontWeight: "bold",
            fontSize: "1.4rem"
        }
    },
})

export default theme;