import React from 'react';
import PropTypes from 'prop-types';

function WineDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedWine.name}</h1>
      <h2>Type: {props.selectedWine.type}</h2>
      <h4>Price: {props.selectedWine.price}</h4>
      <h4>ABV: {props.selectedWine.ABV}</h4>
      <p>Volume: {props.selectedWine.volume}</p>
    </div>
  );
}

WineDetail.propTypes = {
  selectedWine: PropTypes.object
};

export default WineDetail;