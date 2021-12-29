import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box'
import Project from "../Project/Project";

function Portfolio() {

    return (
        <Box sx={{ p: "5rem"}}>
            <Typography className="title" align="center" variant="h2" sx={{pb: "5rem"}}>Projects I've Been Working On</Typography>
            <Project />
        </Box>
    )
}

export default Portfolio;