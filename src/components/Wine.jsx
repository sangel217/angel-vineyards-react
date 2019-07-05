import React from 'react';
import PropTypes from 'prop-types';

function Wine(props) {
  return (
    <div>
      <ul>
        <li>
          <h4>{props.name}</h4>
          <p>{props.type}</p>
          <p>{props.ABV}%</p>
          <p>${props.price}</p>
          <p>Volume left by 4oz serving: {props.volume}</p>
        </li>
      </ul>
    </div>
  );
}

Wine.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ABV: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired
};

export default Wine;