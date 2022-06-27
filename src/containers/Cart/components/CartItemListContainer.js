import React, { useContext } from 'react'
import cartContext from '../../../context/CartContent';
import CartItemList from './CartItemList'

const CartItemListContainer = () => {
    const {data:{items}} = useContext(cartContext);
    console.log(items)
  return (
    <CartItemList items={items}/>
  )
}

export default CartItemListContainer