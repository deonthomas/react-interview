import React from 'react';

const CartSummary = (props) => {
 
  var price = 0.00;
   for (var i = 0; i < props.cart.length; i++) {
       if(props.cart.length > 0){
	       price = price + props.cart[i].price;
     }
   }
  return (
    <div className="CartSummary">
      <span id="ItemCount">{props.cart.length}</span>
      <span id="TotalCost">{price.toFixed(2)}</span>
    </div>
  )
};

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired
};

export default CartSummary;