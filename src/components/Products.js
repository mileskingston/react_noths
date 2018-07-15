import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class Products extends PureComponent {
  render() {
    const { props } = this;

    return (
      <div className="product_summary_collection container__row">
        {props.data && 
          props.data.map((product, index) =>
            <Product key={index} data={product} />
        )}
      </div>
    );
  }
};

Products.displayName = 'Products';

Products.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.string,
      image_url: PropTypes.string
    })
  ).isRequired
};

export default Products;

