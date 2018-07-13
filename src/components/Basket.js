import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Basket.css';

class Basket extends PureComponent {
  countProductType(type) {
    // filter each item and get length
    const countProducts = this.props.basket.items.filter(item => item === type);
    return countProducts.length;
  }

  render() {
    const { props } = this;
    const basket = props.basket;

    return (
      <section className="basket">
        <h2>Basket</h2>
        <table className="products">
          <thead>
            <tr>
              <th>Product name</th>
              <th>Qty</th>
            </tr>
          </thead>
          <tbody>
            {
              basket.items
                .filter((item, index, array) => array.indexOf(item) === index)
                .map((value, index) =>
                  <tr key={index}>
                    <td>{value}</td>
                    <td>{this.countProductType(value)}</td>
                  </tr>
                )
            }
          </tbody>
        </table>
        <div className="total">
          <span className="label">Total: </span>
          <span className="amount">{basket.total}</span>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    basket: state.basket
  };
}

export default connect(mapStateToProps)(Basket);