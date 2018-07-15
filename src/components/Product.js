import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProduct } from '../actions/index';
import Button from './Button';

import './Product.css';

class Product extends PureComponent {
  constructor(props) {
    super(props);

    this.addProduct = this.addProduct.bind(this);
  }

  addProduct() {
    this.props.addProduct(this.props.data);
  }

  render() {
    const { props } = this;

    return (
      <div className="product_summary">
        <div className="product">
          <img className="product_image" src={props.data.image_url} alt={props.data.title} />
          <h2 className="product_title">{props.data.title}</h2>
          <div className="product_price">{props.data.price}</div>
          <Button
            classes="add_to_basket"
            onClick={() => { this.addProduct(); }}
          >
            Add to basket
          </Button>
        </div>
      </div>
    );
  }
};

Product.displayName = 'Product';

Product.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    image_url: PropTypes.string
  }).isRequired
};

function mapStateToProps(state) {
  return {
    basket: state.basket
  };
}

export default connect(mapStateToProps, { addProduct })(Product);
