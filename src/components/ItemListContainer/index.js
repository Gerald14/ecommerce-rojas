import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'


const ItemListContainer  = ({greeting}) => {
  return (
      
    <Grid 
        container  
        spacing={1}
        sx={{p:2}}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
    >
        <Grid item xs={8}>
            <Typography variant="h2" color="initial">{greeting}</Typography>
        </Grid>
    </Grid>
  )
}

export default ItemListContainer 