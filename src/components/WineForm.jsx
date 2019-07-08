import React from 'react';

function WineForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Wine Name'/>
        <br/>
        <input
          type='text'
          id='type'
          placeholder='Wine Varietal or Type'/>
        <br/>
        <input
          type='number'
          id='ABV'
          placeholder='Alcohol by Volume(ABV)' step="0.01" min="0" max="50"/>
        <br/>
        <input
          type='number'
          id='price'
          placeholder='Price per 4oz pour' step="0.01" min="0" max="50"/>
        <br/>
        <input
          type='number'
          id='volume'
          placeholder='Full is 420 for 4oz per keg' step="0.01" min="0" max="50"/>
        <br/>
        <button type='submit'>Add New Wine</button>
      </form>
    </div>
  );
}

export default WineForm;