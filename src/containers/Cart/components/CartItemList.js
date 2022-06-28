import CartItem from './CartItem'
import React from 'react'
import { Stack } from '@mui/material'

const CartItemList = ({items}) => {
  return (
    <Stack spacing={2} >
        {items.map((item)=>
            <CartItem item={item}/>
        )}
    </Stack>
  )
}

export default CartItemList