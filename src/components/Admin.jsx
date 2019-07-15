import React from 'react';
import PropTypes from 'prop-types';
import WineList from './WineList';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <WineList wineList={props.wineList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  wineList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;