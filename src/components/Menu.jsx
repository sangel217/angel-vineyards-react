import React from 'react';
import WineList from './WineList';
import PropTypes from 'prop-types';

function Menu(props){
  return (
    <div>
      <h2>Available Wines on Tap!</h2>
      {/* {props.ticketList} */}
      <WineList wineList={props.wineList} />
    </div>
  );
}

Menu.propTypes = {
  wineList: PropTypes.object
};

export default Menu;