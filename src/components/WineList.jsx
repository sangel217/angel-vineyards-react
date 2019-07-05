import React from 'react';
import Wine from './Wine';

const wineList = [
  {
    name: 'Violet Viognier',
    type: 'Viognier',
    ABV: 15,
    price: 12.99,
    volume: 420
  },
  {
    name: 'Chico Champagne',
    type: 'Champagne',
    ABV: 13,
    price: 14.99,
    volume: 400
  },
  {
    name: 'Don Juan\'s Vino Caliente',
    type: 'Red Blend Warmed with Spices',
    ABV: 16,
    price: 10.99,
    volume: 350
  },
  {
    name: 'Chula\'s Potent Pinot',
    type: 'Pinot Noir',
    ABV: 14,
    price: 18.99,
    volume: 10
  }
];

function WineList(){
  return (
    <div>
      <hr/>
      {wineList.map((wine, index) =>
        <Wine name={wine.name}
          type={wine.type}
          ABV={wine.ABV}
          price={wine.price}
          volume={wine.volume}
          key={index} />
      )}
    </div>
  );
}

export default WineList;