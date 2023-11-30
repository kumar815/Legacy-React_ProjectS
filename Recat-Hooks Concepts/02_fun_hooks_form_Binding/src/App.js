import React from 'react';
import './App.css';
import ChangeUsername from './component/ChangeUsername';

const App = () => {
    return (
      <React.Fragment>
        <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
          <a href='/' className='navbar-brand'>
            Hooks Forms - Events Bindings function 
          </a>
        </nav>
        <ChangeUsername/>
      </React.Fragment>
    );
  }

export default App;
