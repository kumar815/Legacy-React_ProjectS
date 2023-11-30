import React from 'react';
import './App.css';
import CounterFun from './components/counterFUn';
import WishMsg from './components/WishMsg';
//import ProductList from './components/productList';

const App = () => {
    return (
      <React.Fragment>
        <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
          <a href='/' className='navbar-brand'>
            Hooks Forms - Events Bindings function 
          </a>
        </nav>
        <CounterFun />
         <WishMsg/>
        
        {/*<ProductList/>  */}
      </React.Fragment>
    );
  }

export default App;
