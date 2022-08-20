import React from "react"
import { Box, Stack, Typography } from '@mui/material'
import Data from "./Data"
import Habitcard from "./Habitcard"

export default function Habitsbody() {
    const cards = Data.map(item => {
        return (
            <Habitcard
                key={item.id}
                title={item.title}
                description={item.description}

            />
        )
    })
    return (

        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <Typography color="#FF2625" fontWeight="600" fontSize="26px">5 Key Practices to Remember When You Exercisee</Typography>
            <section className="cards-list">
                {cards}
            </section>

        </Box>




    )
}
