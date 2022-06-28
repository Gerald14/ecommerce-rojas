import { createContext, useState } from "react";

const cartContext = createContext();

const Provider = cartContext.Provider;

export const CartProvider = ({children}) => {

    const [data, setData] = useState({
        items : [],
        quantity: 0,
        amount: 0
    });
    console.log(data)

    const addItem = (item, quantity) => {
        const isInCart = data.items.some(i => i.id === item.id);
        if(isInCart){
            updateItem(item.id,quantity)
        }else{
            setData({
                items:[
                    ...data.items,
                    item
                ],
                quantity: data.quantity + quantity,
                amount: data.amount + quantity*item.price
            })
        }
        
    }

    const updateItem = (itemId, quantity) => {
        const itemToUpdate = data.items.find(item => item.id === itemId);
        setData({
            items: data.items.map(item => item.id === itemId? {...item,quantity}:item),
            quantity: data.quantity - itemToUpdate.quantity + quantity,
            amount: data.amount - itemToUpdate.price*(itemToUpdate.quantity - quantity)
        })
    }

    const removeItem = (itemId) => {
        const itemToRemove = data.items.find(item => item.id === itemId);
        setData({
            items: data.items.filter(item => item.id !== itemId),
            quantity: data.quantity - itemToRemove.quantity,
            amount: data.amount - itemToRemove.quantity * itemToRemove.price
        })
    }

    const clear = () => {
        setData({
            items:[],
            quantity: 0,
            amount: 0
        })
    }

    const contextValue = {
        data,
        addItem,
        removeItem,
        clear
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )

}

export default cartContext;