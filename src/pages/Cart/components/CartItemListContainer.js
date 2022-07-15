import React, { useContext } from 'react';

import CartEmpty from './CartEmpty';
import CartItemList from './CartItemList';
import cartContext from '../../../context/CartContext';

function CartItemListContainer() {
  const { data: { items } } = useContext(cartContext);

  return (
    <>
      { items.length > 0
        ? <CartItemList items={items} />
        : <CartEmpty />}
    </>

  );
}

export default CartItemListContainer;
