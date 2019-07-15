import React from 'react';
import PropTypes from 'prop-types';

function Wine(props) {
  const wineInformation =
    <div>
      <ul>
        <li>
          <h4>{props.name}</h4>
          <p>Wine Varietal/Type: {props.type}</p>
          {/* <p>ABV: {props.ABV}%</p>
          <p>Price per 4oz pour: ${props.price}</p>
          <p>Volume left by 4oz serving: {props.volume}</p> */}
        </li>
      </ul>
    </div>;
  if(props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onWineSelection(props.wineId);}}>
        {wineInformation}
      </div>
    );
  } else {
    return (
      <div>
        {wineInformation}
      </div>
    );
  }
}

Wine.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ABV: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  volume: PropTypes.number.isRequired,
  currentRouterPath: PropTypes.string,
  onWineSelection: PropTypes.func,
  wineId: PropTypes.string.isRequired
};

export default Wine;