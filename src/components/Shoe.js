import React from 'react';

const Shoe = (props) => {
  const shoe = props;
  return(
     <div className="col m12 m7">
      <div className="card horizontal">

          <div className="card-content">
            <span className="cart-item-brand">{shoe.brand}</span>
            <span className="cart-item-name">{shoe.name}</span>
            <span className="cart-item-price">{shoe.price.toFixed(2)}</span>
          </div>

          <div className="card-action">
          <a href="#" onClick={() => props.onShoeSelect(shoe)}  >ADD TO CART</a>
          </div>

      </div>
    </div>
  )
};

Shoe.propTypes = {
  brand: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;
