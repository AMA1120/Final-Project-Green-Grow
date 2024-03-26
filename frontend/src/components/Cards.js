import React from 'react';
import './Cards.css';
import CardItem from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h2>PLANT WITH US! WE GIVE YOU EVRYTHING!</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/Images/cin.jpeg'
              text='From the 1st step of cinnoman world'
              label='Cinnamon'
              path='/Cinnamon'
            />
            <CardItem
              src='Images/Tea.jpeg'
              text='Let`s plant Tea'
              label='Tea'
              path='/Tea'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/veg.jpeg'
              text='Let`s grow with us and fill your appatie with organics'
              label='Vegetable'
              path='/services'
            />
            <CardItem
              src='images/flowers.jpeg'
              text='Let`s change your garden with flowers'
              label='Flowers'
              path='/products'
            />
            <CardItem
              src='images/fruits2.jpeg'
              text='Let`s grow with your kids in your garden'
              label='Fruits'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;