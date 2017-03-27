import React from 'react';

const Shoe = (props) => (
 
   <div class="col s12 m7">
    <div class="card horizontal">
    
       
        <div className="card-content">
          <span>{props.brand}</span>
          <span>{props.name}</span>
          <span>{props.price.toFixed(2)}</span>
        </div>

        <div class="card-action">
          <a href="#">ADD TO CART</a>
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