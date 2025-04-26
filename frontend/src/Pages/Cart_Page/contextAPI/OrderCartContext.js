import { useState, createContext, useContext, useEffect } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  // const [order, setOrder] = useState(() => {
  //   const savedOrder = localStorage.getItem('order');
  //   return savedOrder ? JSON.parse(savedOrder) : {};
  // });

  // const [menu, setMenu] = useState(()=>{
  //   const savedMenu =localStorage.getItem('menu');
  //   return savedMenu ? JSON.parse(savedMenu) : [];
  // }); 

  const [order ,setOrder] =useState({});
  const [menu ,setMenu] =useState([])

  useEffect(() => {
    console.log("MENU",menu);
  }, [menu]);

  useEffect(()=>{
    console.log("Order DAta :",order);
  },[order])

  return (
    <OrderContext.Provider value={{ order, menu, setMenu, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = () => {
  return useContext(OrderContext);
};
