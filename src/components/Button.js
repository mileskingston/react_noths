import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

class Button extends PureComponent {
  render() {
    const { props } = this;
    let classes = ['button'];

    if (props.classes) {
      classes.push(props.classes);
    }

    return (
      <button
        className={classes.join(' ')}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>  
    );
  }
};

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  classes: PropTypes.string
};

Button.Defaults = {
  type: 'button',
  classes: ''
};

export default Button;
