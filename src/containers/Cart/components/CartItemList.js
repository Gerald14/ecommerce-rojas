import { Stack } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'

const CartItemList = ({items}) => {
  return (
    <Stack spacing={2}>
        {items.map((item)=>
            <CartItem item={item}/>
        )}
    </Stack>
  )
}

export default CartItemList