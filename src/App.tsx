import './App.css';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Routes from "./routes";
import store from './store';

function App() {
  const [darkToogle, setDarkToogle]=useState(false);
  return (
    <Provider store={store}>
        <Routes/>
    </Provider>
    
  );
}

export default App;
