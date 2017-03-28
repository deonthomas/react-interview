import React from 'react';

const Shoe = (props) => (

   <div className="col m12 m7">
    <div className="card horizontal">

        <div className="card-content">
          <span>{props.brand}</span>
          <span>{props.name}</span>
          <span>{props.price.toFixed(2)}</span>
        </div>

        <div className="card-action">
        <a href="#" onClick={props.onShoeSelect.bind(this,{...props}) }>ADD TO CART</a>
        </div>

    </div>
  </div>

);

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;
