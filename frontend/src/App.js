import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About_Page from './Pages/About_Page/page';
import Home_Page from './Pages/Home_Page/page';
import Order_Page from './Pages/Order_Page/page';
import { FilterProvider } from './Pages/Order_Page/ContextApi/FilterApi';
import { OrderProvider } from './Pages/Cart_Page/contextAPI/OrderCartContext';
import Cart_Page from './Pages/Cart_Page/page'; 
import Header from './Pages/Home_Page/components/Header';

function App() {
  return (
    <FilterProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home_Page />} />
            <Route path='/about' element={<About_Page />} />
            <Route path='/order' element={<Order_Page />} />
            <Route path='/cart' element={<Cart_Page />} />
          </Routes>
        </Router>
    </FilterProvider>
  );
}

export default App;
