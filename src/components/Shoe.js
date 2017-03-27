import React from 'react';

const Shoe = (props) => (
 
        <div className="card-content">
          <span>{props.brand}</span>
          <span>{props.title}</span>
          <span>{props.name}</span>
          <span>{props.price.toFixed(2)}</span>
        </div>
);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;