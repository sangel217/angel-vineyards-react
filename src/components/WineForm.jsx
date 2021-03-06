import React from 'react';
import PropTypes from 'prop-types';

function WineForm(props){
  let _name = null;
  let _type = null;
  let _ABV = null;
  let _price = null;
  let _volume = null;

  function handleNewWineFormSubmission(event){
    event.preventDefault();
    props.onNewWineCreation({name: _name.value, type: _type.value, ABV: parseInt(_ABV.value), price: parseFloat(_price.value), volume: parseInt(_volume.value)});
    _name.value = '';
    _type.value = '';
    _ABV.value = 0;
    _price.value = 0;
    _volume.value = 0;
  }

  return (
    <div>
      <form onSubmit={handleNewWineFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Wine Name'
          ref={(input)=> {_name = input;}}/>
        <br/>
        <input
          type='text'
          id='type'
          placeholder='Wine Varietal or Type'
          ref={(input)=> {_type = input;}}/>
        <br/>
        <input
          type='number'
          id='ABV'
          placeholder='Alcohol by Volume(ABV)' step="0.01" min="0" max="50"
          ref={(input)=> {_ABV = input;}}/>
        <br/>
        <input
          type='number'
          id='price'
          placeholder='Price per 4oz pour' step="0.01" min="0" max="420"
          ref={(input)=> {_price = input;}}/>
        <br/>
        <input
          type='number'
          id='volume'
          placeholder='Full is 420 for 4oz per keg' step="0.01" min="0" max="420"
          ref={(input)=> {_volume = input;}}/>
        <br/>
        <button type='submit'>Add New Wine</button>
      </form>
    </div>
  );
}

WineForm.propTypes = {
  onNewWineCreation: PropTypes.func
};

export default WineForm;