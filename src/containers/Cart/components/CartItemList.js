import { Box, Stack, Typography } from '@mui/material'

import CartItem from './CartItem'
import React from 'react'

const CartItemList = ({items}) => {
  return (
    <Stack spacing={2} >
        <Box sx={{display:{xs:'none',md:'flex'},justifyContent:'space-between',borderBottom:'1px solid #b3b3b3',borderTop:'1px solid #b3b3b3',padding:'1rem 0'}}>
          <Typography variant="h6" sx={{flexGrow:2}} color="initial">
            Producto
          </Typography>
          <Typography variant="h6" sx={{flexGrow:5}} color="initial">
            Descripcion
          </Typography>
          <Typography variant="h6" sx={{flexGrow:2}} color="initial">
            Cantidad
          </Typography>
          <Typography variant="h6" sx={{flexGrow:1}} color="initial">
            Sub Total
          </Typography>
        </Box>
        {items.map((item,index)=>
            <CartItem key={index} item={item}/>
        )}
    </Stack>
  )
}

export default CartItemList