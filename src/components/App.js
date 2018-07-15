import React from 'react';
import Product from './Product';
import Basket from './Basket';
import Products from './Products';
import ProductsData from '../productData';

const App = () => (
  <div className="app app__container">
    <div className="container__row">
      <aside className="aside container__column">
        <Basket />
      </aside>
      
      <section className="main container__column">
        <Products data={ProductsData} />
      </section>
    </div>
  </div>
);

export default App;
