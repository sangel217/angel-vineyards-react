import React from 'react';
import PropTypes from 'prop-types';
import WineList from './WineList';
import WineDetail from './WineDetail';

function Admin(props){
  let optionalSelectedWine = null;
  if (props.selectedWine != null){
    optionalSelectedWine = <WineDetail selectedWine={props.wineList[props.selectedWine]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedWine}
      <WineList wineList={props.wineList}
        currentRouterPath={props.currentRouterPath} 
        onWineSelection={props.onWineSelection}/>
    </div>
  );
}

Admin.propTypes = {
  wineList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onWineSelection: PropTypes.func.isRequired,
  selectedWine: PropTypes.string
};

export default Admin;