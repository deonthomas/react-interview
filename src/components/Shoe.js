import React from 'react';

const Shoe = (props) => (
 
   
   <div class="col s12 m7">
    <div class="card horizontal">
    
        <div class="card-content">
          <span>{props.item.brand}</span> <span>{props.item.title}</span> <span>{props.item.name}</span> <span>{props.item.price}</span>
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