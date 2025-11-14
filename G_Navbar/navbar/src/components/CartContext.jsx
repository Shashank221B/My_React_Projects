import { createContext, useState } from "react";

//step 1: Creating a Context.
export const CartContext = createContext(); 

//step 2: context Provider

export const CartProvider = ({children})=>{
    const [cart,setCart] = useState([]);

    const addProduct = (product)=>{
        // console.log(product)
        const exists = cart.find((item)=>item.id===product.id);

        if(exists){
            setCart(cart);
        }
        else{
            setCart((prev)=>[...prev,product])
        }
    }

    const removeProduct =(id)=>{
        setCart((prev)=>prev.filter((prod)=>prod.id!==id))
    } 


    return ( <CartContext.Provider value={{cart,addProduct,removeProduct}}>
        {children}
    </CartContext.Provider>
)
}

