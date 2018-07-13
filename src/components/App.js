import React from 'react';
import products from '../productData';
import Product from './Product';
import Basket from './Basket';

const App = () => (
  <div className="app app__container">
    <div className="container__row">
      <aside className="aside container__column">
        <Basket />
      </aside>
      
      <section className="main container__column">
        <section className="product_summary_collection container__row">
          {products && 
            products.map((product, index) =>
              <Product key={index} data={product} />
          )}
        </section>
      </section>
    </div>
  </div>
);

export default App;
