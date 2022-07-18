import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const cartContext = createContext();
const { Provider } = cartContext;

export function CartProvider({ children }) {
  const [data, setData] = useState(() => {
    const db = JSON.parse(window.localStorage.getItem('cart-data'));
    const dbInit = {
      items: [],
      quantity: 0,
      amount: 0,
    };
    return db || dbInit;
  });

  const updateItem = (itemId, quantity) => {
    const itemToUpdate = data.items.find((item) => item.id === itemId);
    const dataObj = {
      items: data.items.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
      quantity: data.quantity - itemToUpdate.quantity + quantity,
      amount: data.amount - itemToUpdate.price * (itemToUpdate.quantity - quantity),
    };
    setData(dataObj);
    window.localStorage.setItem('cart-data', JSON.stringify(dataObj));
  };

  const addItem = (item, quantity) => {
    const isInCart = data.items.some((i) => i.id === item.id);
    if (isInCart) {
      updateItem(item.id, quantity);
    } else {
      const dataObj = {
        items: [
          ...data.items,
          item,
        ],
        quantity: data.quantity + quantity,
        amount: data.amount + quantity * item.price,
      };
      setData(dataObj);
      window.localStorage.setItem('cart-data', JSON.stringify(dataObj));
    }
  };

  const removeItem = (itemId) => {
    const itemToRemove = data.items.find((item) => item.id === itemId);
    const dataObj = {
      items: data.items.filter((item) => item.id !== itemId),
      quantity: data.quantity - itemToRemove.quantity,
      amount: data.amount - itemToRemove.quantity * itemToRemove.price,
    };
    setData(dataObj);
    window.localStorage.setItem('cart-data', JSON.stringify(dataObj));
  };

  const clear = () => {
    const dataObj = {
      items: [],
      quantity: 0,
      amount: 0,
    };
    setData(dataObj);
    window.localStorage.setItem('cart-data', JSON.stringify(dataObj));
  };

  const contextValue = {
    data,
    addItem,
    updateItem,
    removeItem,
    clear,
  };

  return (
    <Provider value={contextValue}>
      {children}
    </Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default cartContext;
