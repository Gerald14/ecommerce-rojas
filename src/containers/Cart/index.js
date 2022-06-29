import { Container, Grid, Typography } from '@mui/material'

import CartItemListContainer from './components/CartItemListContainer'
import React from 'react'

const Cart = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{width:'100%',p:{xs:2,sm:2}, m:0}}>
        <Grid item xs={12} mt={3}>
          <Typography variant="h3" color="initial">
            Carrito
          </Typography>
        </Grid>
        <Grid container spacing={2} m={0} >
          <Grid item xs={12} sm={12} md={12} lg={8} sx={{paddingLeft:'0!important'}}>
            <CartItemListContainer/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} m={0}>
            Order Summary
          </Grid>
        </Grid>  
      </Grid>
    </Container>
    
  )
}

export default Cart