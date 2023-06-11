import React from 'react';
import ReactDOM from 'react-dom/client';
import  Globalstyle from './styles/GlobalStyles';
import Pedidos from './containers/Pedidos';
import Home from './containers/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Home />, <Globalstyle/>

);
