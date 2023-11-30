import React from 'react';
import './App.css';
//import AuthCard from '../../Components/Authcard';

const App = () => {
  return (
    <React.Fragment>
      <nav className='navbar navbar-brand bg-black text-primary text-center'>
        <a href='/' alt="">
          <h2>REACT-FUN-Conditional Looping</h2>
        </a>
      </nav>
      <AuthCard/>
    </React.Fragment>
  );
};

export default App;
