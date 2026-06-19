import { createContext,useState} from "react";
export const StateContext = createContext();

function StateProvider({ children }) {
    const [cart,setCart]=useState([])
    const [cartCopy,setCartCopy]=useState([])
    

  return( <StateContext.Provider value={{cart,setCart,cartCopy,setCartCopy}}>{children}</StateContext.Provider>
)}
export default StateProvider;
