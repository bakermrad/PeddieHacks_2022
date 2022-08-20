import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

export default function Habitcard(props) {
    return (
        <Stack>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
                {props.title}
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                {props.description}
            </Typography>
        </Stack>
        // <div>
        //     <h1>{props.title}</h1>
        //     <p>{props.description}</p>
        // </div>


    )
}

