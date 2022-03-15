import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header'
import Dresses from './components/Dresses'
import Shoes from './components/Shoes'
import Accessories from './components/Accessories'
import Footer from './components/Footer'

const App = () =>{
  return (
<>
<Header title="Móda" description="Stylové oblečení a doplňky pro každý den"/>
<Dresses title="Šaty"/>
<Shoes title="Boty"/>
<Accessories title="Doplňky"/>
<Footer year="2022" author="Czechitas"/>
</>
)
} ;

render(<App />, document.querySelector('#app'));
