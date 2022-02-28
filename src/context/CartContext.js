import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
        const storageData = localStorage.getItem('items');
        return storageData ? JSON.parse(storageData) : []
    });

    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(cart))
    }, [cart]);

    const addToCart = (item, amount) => {
        if(isOnCart(item.id)) {
            addAmount(item, amount)
        } else {
            setCart([...cart, {...item, amount}]);
        }
    };

    const isOnCart = (id) => {
        const answ = cart.some((prod) => prod.id === id);
        return answ;
    };

    const addAmount = (item, amount) => {
        const copy = [...cart];
        copy.forEach((prod) => {
            if(prod.id === item.id) {
                prod.amount += amount;
            } 
        });
    };

    const emptyCart = () => {
        setCart([]);
    };

    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const totalSum = () => {
        let count = 0;
        cart.forEach((num) => {
            count += num.price * num.amount;
        });
        return count;
    };

    const totalItems = () => {
        let count = 0;
        cart.forEach((i) => {
            count += i.amount
        })
        //console.log(count)
        return count
    };

    return (
        <CartContext.Provider value = {{ cart, addToCart, emptyCart, deleteItem, totalSum, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;