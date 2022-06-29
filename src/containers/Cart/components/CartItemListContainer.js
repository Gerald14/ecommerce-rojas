import React, { useContext } from 'react'

import CartItemList from './CartItemList'
import cartContext from '../../../context/CartContext';

const CartItemListContainer = () => {
    const {data:{items}} = useContext(cartContext);
    console.log(items)
  return (
      <CartItemList items={items}/>
  )
}

export default CartItemListContainer