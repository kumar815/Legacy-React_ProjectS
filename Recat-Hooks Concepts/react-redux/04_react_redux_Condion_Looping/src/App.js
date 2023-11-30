import React from 'react';
import './App.css';
import PizzaHut from './components/pizzaHut';
import RegistarForm from './components/registarForm';

function App() {
  return (
    <React.Fragment>
     <nav className="nav navbar-brnad bg-dak text-success text-center">
      <a href="/" className="redux" alt="iamge">redux</a>
     </nav>
     <RegistarForm/>
    </React.Fragment>
  );
}

export default App;
