import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    //agregar items al cart
    const addToCart = (item, amount) => {
        if(isOnCart(item.id)) {
            addAmount(item, amount)
        } else {
            setCart([...cart, {...item, amount}]);
        }
    };

    //revisar si producto esta en cart
    const isOnCart = (id) => {
        const answ = cart.some((prod) => prod.id === id);
        return answ;
    };

    //sumar cantidad de unidades del carrito
    const addAmount = (item, amount) => {
        const copy = [...cart];
        copy.forEach((prod) => {
            if(prod.id === item.id) {
                prod.amount += amount;
            } 
        });
    };

    //vaciar cart
    const emptyCart = () => {
        setCart([]);
    };

    //eliminar por item
    const deleteItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    //sumar total del carrito (precio*cantidad)
    const totalSum = () => {
        let count = 0;
        cart.forEach((num) => {
            count += num.price * num.amount;
        });
        return count;
    };

    return (
        <CartContext.Provider value = {{ cart, addToCart, emptyCart, deleteItem, totalSum }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;