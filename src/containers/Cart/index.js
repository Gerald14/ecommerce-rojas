import { Grid, Typography } from '@mui/material'
import React from 'react'
import CartItemListContainer from './components/CartItemListContainer'

const Cart = () => {
  return (
    <Grid container spacing={2} sx={{width:'100%',p:{xs:2,sm:2}, m:0}}>
       <Grid item xs={12} mt={3}>
        <Typography variant="h3" color="initial">
          Carrito
        </Typography>
       </Grid>
       <Grid item xs={12} md={8}>
        <CartItemListContainer/>
       </Grid>
       <Grid item xs={12} md={4}>
        Order Summary
       </Grid>
    </Grid>
  )
}

export default Cart